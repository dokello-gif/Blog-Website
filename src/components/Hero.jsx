import React from 'react';
import { Clock, Heart, PenTool, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-6 md:px-0">
            <div className="container mx-auto max-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:pr-12"
                    >
                        <div className="inline-block px-4 py-2 bg-magenta text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6 shadow-sm">
                            Featured Story
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight text-charcoal">
                            Finding Beauty in the <span className="text-magenta">Everyday</span> Chaos
                        </h1>

                        <p className="text-lg md:text-xl text-charcoal/80 mb-8 leading-relaxed max-w-lg">
                            A collection of thoughts on how we can discover moments of pure artistic inspiration in the most mundane routines of our daily lives.
                        </p>

                        <div className="flex items-center gap-6 mb-10 text-sm font-medium text-charcoal/60">
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>5 min read</span>
                            </div>
                            <Link to="/category/essays" className="flex items-center gap-2 hover:text-magenta transition-colors">
                                <Heart size={16} />
                                <span>Personal Essay</span>
                            </Link>
                            <div>Dec 15, 2024</div>
                        </div>

                        <Link to="/article/finding-beauty-in-chaos" className="inline-block bg-magenta text-white font-heading font-semibold px-10 py-4 rounded-full hover:bg-magenta-light hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg group">
                            Read Story <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[400px] md:h-[500px] rounded-[32px] overflow-hidden group"
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-magenta/10 via-yellow/10 to-cyan/10 animate-gradient-xy"></div>

                        {/* Decorative Elements */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="text-magenta/20"
                            >
                                <PenTool size={180} strokeWidth={1} />
                            </motion.div>
                        </div>

                        {/* Floating details */}
                        <motion.div
                            className="absolute top-10 right-10 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        >
                            <BookOpen size={32} className="text-cyan mb-2" />
                            <div className="h-1 w-8 bg-cyan rounded-full"></div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-12 left-12 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                        >
                            <Heart size={32} className="text-magenta mb-2" />
                            <div className="h-1 w-8 bg-magenta rounded-full"></div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
