import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WritingCard = ({ id, title, excerpt, date, category, readTime, engagement, color, delay }) => {

    const categoryColors = {
        'Poetry': 'bg-magenta',
        'Blog': 'bg-yellow',
        'Essay': 'bg-cyan'
    };

    const badgeColor = categoryColors[category] || 'bg-magenta';

    return (
        <Link to={`/article/${id || 'sample'}`}>
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full border border-transparent hover:border-magenta/10"
            >
                <div className="flex items-center justify-between mb-6">
                    <span className={`${badgeColor} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
                        {category}
                    </span>
                    <span className="text-sm text-charcoal/60 font-medium">
                        {date}
                    </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-charcoal mb-4 line-clamp-2 hover:text-magenta transition-colors">
                    {title}
                </h3>

                <p className="text-charcoal/70 mb-6 leading-relaxed line-clamp-3 flex-grow">
                    {excerpt}
                </p>

                <div className="flex items-center gap-3 text-sm text-charcoal/50 font-medium mt-auto border-t border-gray-100 pt-4">
                    <span>{readTime}</span>
                    <span>•</span>
                    <span>{engagement}</span>
                </div>
            </motion.article>
        </Link>
    );
};

export default WritingCard;
