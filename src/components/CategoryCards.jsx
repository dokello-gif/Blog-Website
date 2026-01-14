import React from 'react';
import { Heart, FileText, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 'poetry',
        title: 'Poetry',
        count: '24 pieces',
        icon: Heart,
        color: 'text-magenta',
        borderColor: 'border-magenta',
        delay: 0
    },
    {
        id: 'blog',
        title: 'Blog Posts',
        count: '18 pieces',
        icon: FileText,
        color: 'text-yellow',
        borderColor: 'border-yellow',
        delay: 0.1
    },
    {
        id: 'essays',
        title: 'Personal Essays',
        count: '12 pieces',
        icon: PenTool,
        color: 'text-cyan',
        borderColor: 'border-cyan',
        delay: 0.2
    }
];

const CategoryCards = () => {
    return (
        <section id="categories" className="py-20 px-6 bg-cream">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-charcoal">
                    Explore by Category
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link key={category.id} to={`/category/${category.id}`}>
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
                                    {category.count}
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
