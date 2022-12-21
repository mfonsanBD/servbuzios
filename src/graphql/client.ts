import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_URL

const client = new GraphQLClient(endpoint!)

export default client
