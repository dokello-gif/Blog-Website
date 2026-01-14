import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, PenTool, BookOpen, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { client } from '../lib/sanity';

const Hero = () => {
    const [featuredArticle, setFeaturedArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Query for featured article or just the latest if none featured
        const query = `*[_type == "writing" && isPublished == true] | order(isFeatured desc, publishedAt desc)[0] {
            title,
            "slug": slug.current,
            excerpt,
            category->{
                title
            }
        }`;

        client.fetch(query)
            .then((data) => {
                setFeaturedArticle(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching hero article:', err);
                setLoading(false);
            });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    if (loading) return null;

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-cream">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-magenta/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cyan/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-[1000px] mx-auto"
                >
                    {featuredArticle && (
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-magenta/20 rounded-full mb-8 text-magenta font-semibold text-sm">
                            <Sparkles size={16} />
                            <span>Featured Story: {featuredArticle.category?.title}</span>
                        </motion.div>
                    )}

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-charcoal mb-8 leading-[1.1]"
                    >
                        {featuredArticle ? featuredArticle.title : 'Every word is a heartbeat on paper.'}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-charcoal/70 max-w-2xl mb-12 leading-relaxed"
                    >
                        {featuredArticle ? featuredArticle.excerpt : 'Welcome to my creative sanctuary. Here, I share stories, poems, and essays that explore the human experience, one syllable at a time.'}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
                        {featuredArticle ? (
                            <Link
                                to={`/article/${featuredArticle.slug}`}
                                className="group bg-magenta text-white font-heading font-bold text-lg px-10 py-5 rounded-2xl hover:bg-magenta/90 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-magenta/20 flex items-center justify-center gap-3"
                            >
                                Read Story <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        ) : (
                            <Link
                                to="/category/all"
                                className="group bg-magenta text-white font-heading font-bold text-lg px-10 py-5 rounded-2xl hover:bg-magenta/90 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-magenta/20 flex items-center justify-center gap-3"
                            >
                                Explore Stories <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        )}
                        <Link
                            to="/about"
                            className="bg-white text-charcoal font-heading font-bold text-lg px-10 py-5 rounded-2xl border border-charcoal/10 hover:border-magenta/20 hover:bg-cream/50 transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            About the Author
                        </Link>
                    </motion.div>

                    {/* Floating details */}
                    <div className="absolute hidden xl:block top-0 right-0 w-1/3 h-full pointer-events-none">
                        <motion.div
                            className="absolute top-10 right-10 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        >
                            <BookOpen size={32} className="text-cyan mb-2" />
                            <div className="h-1 w-8 bg-cyan rounded-full"></div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-12 right-20 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                        >
                            <Heart size={32} className="text-magenta mb-2" />
                            <div className="h-1 w-8 bg-magenta rounded-full"></div>
                        </motion.div>

                        <motion.div
                            className="absolute top-1/2 right-40 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                        >
                            <PenTool size={32} className="text-yellow mb-2" />
                            <div className="h-1 w-8 bg-yellow rounded-full"></div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
