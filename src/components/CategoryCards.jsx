import React, { useState, useEffect } from 'react';
import { Heart, FileText, PenTool, Hash } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { client } from '../lib/sanity';
import { getCategoriesWithCountQuery } from '../lib/queries';

const CategoryCards = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    // Map category slugs to icons and colors
    // Default fallback for unknown categories
    const getCategoryStyles = (slug) => {
        const styles = {
            'poetry': {
                icon: Heart,
                color: 'text-magenta',
                borderColor: 'border-magenta'
            },
            'blog': {
                icon: FileText,
                color: 'text-yellow',
                borderColor: 'border-yellow'
            },
            'essays': {
                icon: PenTool,
                color: 'text-cyan',
                borderColor: 'border-cyan'
            }
        };
        return styles[slug] || {
            icon: Hash,
            color: 'text-charcoal',
            borderColor: 'border-charcoal'
        };
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await client.fetch(getCategoriesWithCountQuery);

                // Enhance data with visual styles
                const processedCategories = data.map((cat, index) => {
                    const style = getCategoryStyles(cat.slug);
                    return {
                        ...cat,
                        ...style,
                        delay: index * 0.1,
                        countString: `${cat.count} ${cat.count === 1 ? 'piece' : 'pieces'}`
                    };
                });

                setCategories(processedCategories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return (
            <section id="categories" className="py-20 px-6 bg-cream">
                <div className="container mx-auto max-w-[1200px]">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-charcoal">
                        Explore by Category
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="h-64 bg-white rounded-2xl animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="categories" className="py-20 px-6 bg-cream">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-charcoal">
                    Explore by Category
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link key={category.id} to={`/category/${category.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: category.delay }}
                                whileHover={{ scale: 1.05 }}
                                className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 ${category.borderColor} cursor-pointer group h-full`}
                            >
                                <category.icon
                                    size={40}
                                    className={`${category.color} mb-6 transition-transform duration-300 group-hover:scale-110`}
                                />
                                <h3 className="text-2xl font-bold font-heading text-charcoal mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-charcoal/60 font-medium">
                                    {category.countString}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryCards;
