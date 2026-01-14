export const getAllWritingsQuery = `*[_type == "writing" && isPublished == true] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category->{
    title,
    "slug": slug.current
  },
  publishedAt,
  readTime,
  engagement,
  featuredImage
}`

export const getWritingBySlugQuery = `*[_type == "writing" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  category->{
    title,
    "slug": slug.current
  },
  publishedAt,
  readTime,
  engagement,
  featuredImage
}`

export const getWritingsByCategoryQuery = `*[_type == "writing" && isPublished == true && category->slug.current == $categorySlug] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category->{
    title,
    "slug": slug.current
  },
  publishedAt,
  readTime,
  engagement,
  featuredImage
}`

export const searchWritingsQuery = `*[_type == "writing" && isPublished == true && (title match $searchTerm || excerpt match $searchTerm)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category->{
    title,
    "slug": slug.current
  },
  publishedAt,
  readTime,
  engagement
}`

export const getRelatedWritingsQuery = `*[_type == "writing" && isPublished == true && category->slug.current == $categorySlug && _id != $currentId] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category->{
    title,
    "slug": slug.current
  },
  publishedAt,
  readTime,
  featuredImage
}`
