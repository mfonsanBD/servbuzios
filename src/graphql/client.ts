import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_URL

const graphql = new GraphQLClient(endpoint!)

// O Hygraph limita as leituras por segundo. No build o Next gera as páginas em
// paralelo (uma consulta por página) e passa desse limite: a API responde 429
// e o build quebra. Nesses casos a consulta é repetida com espera crescente.
const IS_BUILD = process.env.NEXT_PHASE === 'phase-production-build'
// no build dá para esperar; em produção a página precisa responder logo
const MAX_RETRIES = IS_BUILD ? 6 : 2
const BASE_DELAY = 600
const MAX_DELAY = 8000

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const isRetryable = (error: unknown) => {
  const status = (error as { response?: { status?: number } })?.response?.status

  return status === 429 || (typeof status === 'number' && status >= 500)
}

const client = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async request<T = any>(
    query: string,
    variables?: Record<string, unknown>
  ): Promise<T> {
    for (let attempt = 0; ; attempt++) {
      try {
        return await graphql.request<T>(query, variables)
      } catch (error) {
        if (attempt >= MAX_RETRIES || !isRetryable(error)) throw error

        // a variação evita que todas as páginas tentem de novo no mesmo instante
        const delay = Math.min(BASE_DELAY * 2 ** attempt, MAX_DELAY)
        await wait(delay * (0.5 + Math.random()))
      }
    }
  }
}

export default client
