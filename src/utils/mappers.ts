/* eslint-disable @typescript-eslint/no-explicit-any */
export const DirectoryMapper = (directories: any[]) => {
  return directories
    ? directories.map((directory) => ({
        name: directory.nome,
        role: directory.cargo
      }))
    : []
}

export const ConvenioMapper = (convenios: any[]) => {
  return convenios
    ? convenios.map((convenio) => ({
        imagem: convenio.imagem.url,
        empresa: convenio.empresa
      }))
    : []
}

export const NewsMapper = (noticias: any[]) => {
  return noticias
    ? noticias.map((noticia) => ({
        imagem: noticia.imagem.url,
        titulo: noticia.titulo,
        slug: noticia.slug,
        createdAt: noticia.createdAt
      }))
    : []
}

export const AgendaMapper = (agendas: any[]) => {
  return agendas
    ? agendas.map((agenda) => ({
        title: agenda.titulo,
        date: agenda.data
      }))
    : []
}

export const BannerMapper = (banners: any[]) => {
  return banners
    ? banners.map((banner) => ({
        img: banner.imagem.url,
        title: banner.titulo,
        description: banner.texto.html,
        slug: banner.slug
      }))
    : []
}

export const DocsMapper = (docs: any[]) => {
  return docs
    ? docs.map((doc) => ({
        imagem: doc.imagem.url,
        titulo: doc.titulo,
        arquivo: doc.arquivo.url
      }))
    : []
}
