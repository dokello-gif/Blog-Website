import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const About = () => {
    return (
        <section className="pt-32 pb-20 px-6 bg-cream min-h-screen">
            <SEO
                title="About"
                description="Learn about David and the mission behind this creative writing platform."
            />
            <div className="container mx-auto max-w-[800px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-8 text-center">
                        About <span className="text-magenta">With David</span>
                    </h1>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-magenta/10 mb-12">
                        <p className="text-xl leading-relaxed text-charcoal/80 mb-6 font-medium">
                            Hi, I'm David. Welcome to my digital garden.
                        </p>
                        <p className="leading-relaxed text-charcoal/70 mb-6">
                            "With David" is a platform dedicated to the messy, beautiful process of being human. Here, I explore themes of creativity, emotional resilience, and the quiet magic found in everyday life through poetry, personal essays, and blog posts.
                        </p>
                        <p className="leading-relaxed text-charcoal/70 mb-6">
                            This project started as a simple desire to reconnect with the written word in an age of skimming and scrolling. I wanted to build a space that feels like taking a deep breath—a place where we can slow down and really <em>read</em>.
                        </p>
                        <p className="leading-relaxed text-charcoal/70">
                            Whether you're here for a short poem to start your day or a long essay to ponder over coffee, I hope you find something that resonates.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-yellow">
                            <h3 className="text-xl font-bold font-heading text-charcoal mb-4">The Mission</h3>
                            <p className="text-charcoal/70">
                                To champion a slower, more intentional approach to creativity and content consumption.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-cyan">
                            <h3 className="text-xl font-bold font-heading text-charcoal mb-4">The Vision</h3>
                            <p className="text-charcoal/70">
                                A community of readers and writers who find strength in vulnerability and beauty in the mundane.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
