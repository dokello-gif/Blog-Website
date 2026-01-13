import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = 'With David | Creative Writing Portfolio';
    const defaultDescription = 'A digital garden exploring creativity, poetry, and personal essays. Join me in finding beauty in the everyday chaos.';
    const defaultKeywords = 'creative writing, poetry, essays, blog, personal development, mindfulness';
    const defaultImage = '/logo.jpg'; // Pending dynamic OG image generation or static asset
    const siteUrl = 'https://withdavid.com'; // Placeholder domain

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | With David` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url || siteUrl} />
            <meta name="twitter:title" content={title || siteTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;
