import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Instagram, Twitter } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <section className="pt-32 pb-20 px-6 bg-cream min-h-screen">
            <SEO
                title="Contact"
                description="Get in touch with David. Send a message, ask a question, or just say hello."
            />
            <div className="container mx-auto max-w-[1000px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-6">
                        Get in <span className="text-magenta">Touch</span>
                    </h1>
                    <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
                        Have a question, a project in mind, or just want to discuss the nuances of a rainy Tuesday? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-magenta/10"
                    >
                        <h2 className="text-2xl font-bold font-heading text-charcoal mb-8">Contact Information</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-magenta/5 rounded-full text-magenta">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal mb-1">Email</h3>
                                    <a href="mailto:hello@withdavid.com" className="text-charcoal/70 hover:text-magenta transition-colors">
                                        hello@withdavid.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-cyan/5 rounded-full text-cyan">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal mb-1">Location</h3>
                                    <p className="text-charcoal/70">
                                        Nairobi, Kenya
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-charcoal/10">
                                <h3 className="font-bold text-charcoal mb-4">Follow Me</h3>
                                <div className="flex gap-4">
                                    <a href="#" className="p-3 bg-charcoal/5 rounded-full text-charcoal hover:bg-magenta hover:text-white transition-all duration-300">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="#" className="p-3 bg-charcoal/5 rounded-full text-charcoal hover:bg-cyan hover:text-white transition-all duration-300">
                                        <Twitter size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-charcoal uppercase tracking-wider">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-white border-2 border-charcoal/10 rounded-lg px-4 py-3 focus:outline-none focus:border-magenta transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-charcoal uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-white border-2 border-charcoal/10 rounded-lg px-4 py-3 focus:outline-none focus:border-magenta transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold text-charcoal uppercase tracking-wider">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-white border-2 border-charcoal/10 rounded-lg px-4 py-3 focus:outline-none focus:border-magenta transition-colors"
                                    placeholder="Just saying hi!"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-charcoal uppercase tracking-wider">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full bg-white border-2 border-charcoal/10 rounded-lg px-4 py-3 focus:outline-none focus:border-magenta transition-colors resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-magenta text-white font-heading font-bold text-lg px-8 py-4 rounded-lg hover:bg-magenta/90 hover:scale-[1.02] transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
