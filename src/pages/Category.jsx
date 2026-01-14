import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, PenTool, FileText, Heart } from 'lucide-react';
import { client, formatDate } from '../lib/sanity';
import { getWritingsByCategoryQuery } from '../lib/queries';
import SEO from '../components/SEO';
import WritingCard from '../components/WritingCard';
import { CardSkeleton } from '../components/LoadingSkeleton';
import AnimatedPage from '../components/AnimatedPage';

const Category = () => {
    const { categoryId } = useParams();
    const [writings, setWritings] = useState([]);
    const [loading, setLoading] = useState(true);

    // Map plural URLs to singular category slugs
    const categorySlugMap = {
        'poetry': 'poetry',
        'essays': 'essay',
        'blog': 'blog'
    };

    const categoryTitleMap = {
        'poetry': 'Poetry',
        'essays': 'Essays',
        'blog': 'Blog Posts'
    };

    const categorySlug = categorySlugMap[categoryId] || categoryId;
    const categoryTitle = categoryTitleMap[categoryId] || categoryId;

    useEffect(() => {
        client.fetch(getWritingsByCategoryQuery, { categorySlug })
            .then((data) => {
                setWritings(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching category writings:', error);
                setLoading(false);
            });
    }, [categorySlug]);

    const getCategoryIcon = () => {
        switch (categoryId) {
            case 'poetry': return <PenTool size={32} />;
            case 'essays': return <FileText size={32} />;
            case 'blog': return <Heart size={32} />;
            default: return <FileText size={32} />;
        }
    };

    if (loading) {
        return (
            <AnimatedPage>
                <section className="pt-32 pb-20 px-6 bg-cream min-h-screen">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((n) => (
                                <CardSkeleton key={n} />
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedPage>
        );
    }

    return (
        <AnimatedPage>
            <section className="pt-32 pb-20 px-6 bg-cream min-h-screen">
                <SEO
                    title={categoryTitle}
                    description={`Explore a curated collection of ${categoryTitle.toLowerCase()} pieces.`}
                />
                <div className="container mx-auto max-w-[1200px]">
                    {/* Back Link */}
                    <Link
                        to="/"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center gap-2 text-cyan font-medium hover:text-magenta transition-colors mb-12 group"
                    >
                        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                        Back to home
                    </Link>

                    {/* Category Header */}
                    <div className="mb-16 text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-magenta/10 text-magenta mb-6">
                            {getCategoryIcon()}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-4">
                            {categoryTitle}
                        </h1>
                        <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
                            {writings.length} {writings.length === 1 ? 'piece' : 'pieces'} in this collection
                        </p>
                    </div>

                    {/* Writings Grid */}
                    {writings.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {writings.map((writing, index) => (
                                <WritingCard
                                    key={writing._id}
                                    id={writing.slug}
                                    title={writing.title}
                                    excerpt={writing.excerpt}
                                    category={writing.category?.title || 'Uncategorized'}
                                    date={formatDate(writing.publishedAt)}
                                    readTime={writing.readTime}
                                    engagement={writing.engagement}
                                    delay={index * 0.1}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-charcoal/60 text-lg">No writings found in this category yet.</p>
                            <Link to="/" className="inline-block mt-6 text-magenta hover:underline">
                                Explore all writings
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Category;
