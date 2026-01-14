import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { client } from '../lib/sanity';
import { searchWritingsQuery } from '../lib/queries';

const SearchOverlay = ({ isOpen, onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setResults([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        const timer = setTimeout(() => {
            client.fetch(searchWritingsQuery, {
                searchTerm: `*${searchTerm}*`
            })
                .then((data) => {
                    setResults(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Search error:', error);
                    setLoading(false);
                });
        }, 300);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] bg-cream/98 backdrop-blur-xl flex flex-col pt-32 px-6"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-charcoal/50 hover:text-magenta transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <div className="container mx-auto max-w-3xl h-full flex flex-col">
                        {/* Search Input */}
                        <div className="relative mb-12">
                            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-charcoal/30" size={32} />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search articles, essays, poetry..."
                                className="w-full bg-transparent border-b-2 border-charcoal/10 pb-4 pl-12 text-3xl md:text-5xl font-heading font-bold text-charcoal placeholder:text-charcoal/20 focus:outline-none focus:border-magenta transition-colors"
                                autoFocus
                            />
                        </div>

                        {/* Results */}
                        <div className="flex-grow overflow-y-auto pb-20 scrollbar-hide">
                            {loading && (
                                <div className="text-center text-charcoal/50 py-12">
                                    Searching...
                                </div>
                            )}

                            {!loading && searchTerm && results.length === 0 && (
                                <div className="text-center text-charcoal/50 py-12">
                                    No results found for "{searchTerm}"
                                </div>
                            )}

                            <div className="space-y-6">
                                {results.map((result, index) => (
                                    <motion.div
                                        key={result._id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            to={`/article/${result.slug}`}
                                            onClick={onClose}
                                            className="group block bg-white p-6 rounded-2xl hover:bg-white border border-transparent hover:border-magenta/20 hover:shadow-lg transition-all"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs font-bold uppercase tracking-wider text-magenta">
                                                    {result.category?.title || 'Uncategorized'}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold font-heading text-charcoal mb-2 group-hover:text-magenta transition-colors">
                                                {result.title}
                                            </h3>
                                            <p className="text-charcoal/60 line-clamp-1">
                                                {result.excerpt}
                                            </p>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchOverlay;
