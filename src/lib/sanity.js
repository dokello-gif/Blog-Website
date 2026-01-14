import { createClient } from '@sanity/client'

import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'inxbbd4s',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-13',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
