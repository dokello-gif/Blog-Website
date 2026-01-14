export default {
    name: 'writing',
    title: 'Writing',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            validation: Rule => Rule.required().max(200)
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: Rule => Rule.required()
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
            rows: 20,
            description: 'Write your article content in Markdown format',
            validation: Rule => Rule.required()
        },
        {
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString()
        },
        {
            name: 'readTime',
            title: 'Read Time',
            type: 'string',
            description: 'e.g., "5 min read"'
        },
        {
            name: 'engagement',
            title: 'Engagement',
            type: 'string',
            description: 'e.g., "42 hearts" or "28 comments"'
        },
        {
            name: 'isFeatured',
            title: 'Featured (Show on Hero)',
            type: 'boolean',
            initialValue: false,
            description: 'Set to true to showcase this article in the homepage Hero section'
        },
        {
            name: 'isPublished',
            title: 'Published',
            type: 'boolean',
            initialValue: false,
            description: 'Set to true to display on website'
        }
    ],
    preview: {
        select: {
            title: 'title',
            category: 'category.title',
            media: 'featuredImage',
            published: 'isPublished'
        },
        prepare(selection) {
            const { title, category, media, published } = selection
            return {
                title: title,
                subtitle: `${category || 'No category'} ${published ? '✅' : '⚠️ Draft'}`,
                media: media
            }
        }
    }
}
