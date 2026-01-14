import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Instagram, Twitter } from 'lucide-react';
import SEO from '../components/SEO';
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }

        if (!formData.email.includes('@')) {
            toast.error('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            toast.success('Message sent! I\'ll get back to you soon.');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="pt-32 pb-20 px-6 bg-cream min-h-screen">
            <SEO
                title="Contact"
                description="Get in touch with David. Send a message, ask a question, or just say hello."
            />
            <div className="container mx-auto max-w-[1000px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-6">
                            Let's start a <span className="text-magenta">conversation</span>.
                        </h1>
                        <p className="text-lg text-charcoal/70 mb-12">
                            Whether you have a question about my writing, want to collaborate on a project, or just want to say hello, I'd love to hear from you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-cyan/10 flex items-center justify-center text-cyan shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-charcoal mb-1">Email</h3>
                                    <p className="text-charcoal/70">hello@withdavid.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-magenta/10 flex items-center justify-center text-magenta shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-charcoal mb-1">Location</h3>
                                    <p className="text-charcoal/70">Digital Garden / Earth</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="font-heading font-bold text-charcoal mb-4">Follow My Journey</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-magenta transition-colors">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-cyan transition-colors">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-magenta/5 border border-magenta/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-charcoal ml-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-cream/50 border border-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-magenta focus:ring-1 focus:ring-magenta transition-all"
                                        placeholder="Jon Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-charcoal ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-cream/50 border border-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all"
                                        placeholder="jon@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-charcoal ml-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-cream/50 border border-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-magenta focus:ring-1 focus:ring-magenta transition-all"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-charcoal ml-2">Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-cream/50 border border-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all resize-none"
                                    placeholder="Tell me more..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-magenta text-white font-heading font-bold py-5 rounded-2xl hover:bg-magenta/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-magenta/20 disabled:bg-magenta/50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
