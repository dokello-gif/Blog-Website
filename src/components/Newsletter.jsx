import React from 'react';
import { Sparkles } from 'lucide-react';

const Newsletter = () => {
    return (
        <section className="py-20 px-6 bg-cream">
            <div className="container mx-auto max-w-[800px]">
                <div className="bg-magenta/5 rounded-[40px] p-10 md:p-16 text-center border border-magenta/10 shadow-sm relative overflow-hidden">

                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-yellow/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-cyan/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="bg-white p-4 rounded-full shadow-md mb-8">
                            <Sparkles className="text-magenta" size={32} />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-4">
                            Get New Writings Delivered
                        </h2>

                        <p className="text-lg text-charcoal/70 mb-10 max-w-lg leading-relaxed">
                            Join the creative journey. I send out a collection of poems, essays, and thoughts once a week—no spam, just art.
                        </p>

                        <form className="w-full max-w-md flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-grow px-6 py-4 rounded-full border-2 border-magenta/30 focus:border-magenta focus:outline-none focus:ring-4 focus:ring-magenta/10 transition-all bg-white text-charcoal font-medium placeholder:text-charcoal/40"
                            />
                            <button className="bg-magenta text-white font-heading font-semibold px-8 py-4 rounded-full hover:bg-magenta-light hover:scale-105 transition-all duration-300 shadow-md whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>

                        <p className="text-xs text-charcoal/40 mt-6 font-medium">
                            Free to join. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
