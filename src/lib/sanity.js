import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'inxbbd4s',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-13',
})

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
