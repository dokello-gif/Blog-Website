import React from 'react';
import WritingCard from './WritingCard';
import { writings } from '../data/writings';

const RecentWritings = () => {
    // Get top 6 for homepage
    const recentWritings = writings.slice(0, 6);

    return (
        <section className="py-20 px-6 bg-cream border-t border-white/50">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex items-end justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal">
                        Recent Writings
                    </h2>
                    <a href="#" className="hidden md:block text-magenta font-semibold hover:text-charcoal transition-colors">
                        View all stories →
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentWritings.map((writing, index) => (
                        <WritingCard
                            key={writing.id}
                            {...writing}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="bg-white text-magenta border-2 border-magenta font-heading font-semibold px-8 py-3 rounded-full hover:bg-magenta hover:text-white transition-all duration-300">
                        View all stories
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RecentWritings;
