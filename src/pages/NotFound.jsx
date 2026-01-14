import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6 bg-cream flex items-center justify-center">
            <SEO 
                title="Page Not Found" 
                description="The page you are looking for doesn't exist or has been moved."
            />
            <div className="container mx-auto max-w-2xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-magenta/10 text-magenta mb-8 text-4xl font-bold font-heading">
                        404
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-6">
                        Lost in the <span className="text-cyan">digital garden</span>?
                    </h1>
                    
                    <p className="text-xl text-charcoal/70 mb-12 leading-relaxed">
                        The page you're looking for seems to have wandered off. Don't worry, even the best stories have missing chapters.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            to="/" 
                            className="w-full sm:w-auto bg-magenta text-white font-heading font-bold px-8 py-4 rounded-2xl hover:bg-magenta/90 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-lg shadow-magenta/20"
                        >
                            <Home size={20} />
                            Back to Home
                        </Link>
                        
                        <button 
                            onClick={() => window.location.href = '/#search'}
                            className="w-full sm:w-auto bg-white text-charcoal font-heading font-bold px-8 py-4 rounded-2xl border-2 border-charcoal/10 hover:border-magenta hover:text-magenta transition-all flex items-center justify-center gap-2"
                        >
                            <Search size={20} />
                            Search Stories
                        </button>
                    </div>

                    <div className="mt-16 pt-8 border-t border-charcoal/10">
                        <h3 className="font-heading font-bold text-charcoal mb-4">Popular Categories</h3>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {['Poetry', 'Essays', 'Blog'].map((cat) => (
                                <Link 
                                    key={cat}
                                    to={`/category/${cat.toLowerCase()}`}
                                    className="px-4 py-2 bg-charcoal/5 hover:bg-magenta/10 hover:text-magenta rounded-full text-sm font-bold transition-colors"
                                >
                                    {cat}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NotFound;
