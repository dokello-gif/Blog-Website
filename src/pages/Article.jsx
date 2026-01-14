import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Heart, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { client, formatDate } from '../lib/sanity';
import { getWritingBySlugQuery, getRelatedWritingsQuery } from '../lib/queries';
import SEO from '../components/SEO';
import { ArticleSkeleton } from '../components/LoadingSkeleton';
import toast from 'react-hot-toast';
import AnimatedPage from '../components/AnimatedPage';
import WritingCard from '../components/WritingCard';

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [relatedWritings, setRelatedWritings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Reading progress bar setup
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        setLoading(true);
        client.fetch(getWritingBySlugQuery, { slug: id })
            .then((data) => {
                setArticle(data);
                setLoading(false);

                // Fetch related articles if we have a category
                if (data?.category?.slug) {
                    client.fetch(getRelatedWritingsQuery, {
                        categorySlug: data.category.slug,
                        currentId: data._id
                    }).then(related => setRelatedWritings(related));
                }
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: window.location.href,
                });
                toast.success('Shared successfully!');
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // Fallback to clipboard
            navigator.clipboard.writeText(window.location.href);
            toast.success('Link copied to clipboard!');
        }
    };

    if (loading) {
        return (
            <AnimatedPage>
                <div className="pt-32 pb-20 px-6">
                    <ArticleSkeleton />
                </div>
            </AnimatedPage>
        );
    }

    if (error || !article) {
        return (
            <AnimatedPage>
                <div className="pt-32 px-6 text-center">
                    <h1 className="text-2xl font-bold font-heading text-charcoal mb-4">Article Not Found</h1>
                    <Link to="/" className="text-magenta hover:underline">Back to Home</Link>
                </div>
            </AnimatedPage>
        );
    }

    return (
        <AnimatedPage>
            <article className="pt-32 pb-20 px-6">
                {/* Reading Progress Bar */}
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1.5 bg-magenta z-[60] origin-left"
                    style={{ scaleX }}
                />

                <SEO
                    title={article.title}
                    description={article.excerpt}
                    keywords={`creative writing, ${article.category?.title?.toLowerCase()}, ${article.title.toLowerCase()}`}
                    image={article.featuredImage}
                />
                <div className="container mx-auto max-w-[700px]">
                    {/* Back Link */}
                    <Link
                        to="/"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center gap-2 text-cyan font-medium hover:text-magenta transition-colors mb-8 group"
                    >
                        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                        Back to all stories
                    </Link>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-10"
                    >
                        <div className="inline-block px-3 py-1 bg-magenta text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                            {article.category?.title || 'Uncategorized'}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-8 leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex items-center gap-6 text-sm text-charcoal/60 font-medium border-b border-magenta/10 pb-8">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{formatDate(article.publishedAt)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>{article.readTime}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="prose prose-lg prose-charcoal max-w-none"
                    >
                        <ReactMarkdown>{article.content}</ReactMarkdown>
                    </motion.div>

                    {/* Footer Actions */}
                    <div className="mt-16 pt-8 border-t-2 border-magenta/10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 text-charcoal/60 hover:text-magenta transition-colors">
                                <Heart size={20} />
                                <span>{article.engagement}</span>
                            </button>
                        </div>

                        <button
                            onClick={handleShare}
                            className="flex items-center gap-2 text-charcoal/60 hover:text-cyan transition-colors"
                        >
                            <Share2 size={20} />
                            <span>Share this story</span>
                        </button>
                    </div>

                    {/* Author Note */}
                    <div className="mt-16 bg-cream p-8 rounded-2xl flex items-start gap-6">
                        <div className="w-16 h-16 rounded-full bg-magenta/10 flex items-center justify-center shrink-0">
                            <span className="font-heading font-bold text-magenta text-xl">D</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold font-heading mb-2">Written by David</h3>
                            <p className="text-charcoal/70 leading-relaxed">
                                Thanks for reading! I write about creativity, life, and the messy process of being human. If you enjoyed this, consider subscribing to my newsletter.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Related Articles */}
                {relatedWritings.length > 0 && (
                    <div className="mt-24 pt-12 border-t border-charcoal/10">
                        <h3 className="text-2xl font-bold font-heading text-charcoal mb-8">More Like This</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedWritings.map((writing, index) => (
                                <WritingCard
                                    key={writing._id}
                                    id={writing.slug}
                                    title={writing.title}
                                    excerpt={writing.excerpt}
                                    category={writing.category?.title || 'Uncategorized'}
                                    date={formatDate(writing.publishedAt)}
                                    readTime={writing.readTime}
                                    delay={index * 0.1}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </article>
        </AnimatedPage>
    );
};

export default Article;
