import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-magenta/10 pt-16 pb-12 px-6">
            <div className="container mx-auto max-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <span className="text-xl font-bold font-heading text-magenta">With David</span>
                        </Link>
                        <p className="text-charcoal/70 mb-6 leading-relaxed">
                            Creating for fun, inspiring for life. A digital garden of poetry, essays, and creative thoughts.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-magenta hover:text-white transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-cyan hover:text-white transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-yellow hover:text-charcoal transition-all duration-300">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 - Links */}
                    <div>
                        <h4 className="font-bold font-heading text-lg mb-6">Explore</h4>
                        <ul className="space-y-4 text-charcoal/70">
                            <li><Link to="/about" className="hover:text-magenta transition-colors">About</Link></li>
                            <li><Link to="/contact" className="hover:text-magenta transition-colors">Contact</Link></li>
                            <li><Link to="/category/essays" className="hover:text-magenta transition-colors">Essays</Link></li>
                            <li><Link to="/category/poetry" className="hover:text-magenta transition-colors">Poetry</Link></li>
                            <li><Link to="/category/blog" className="hover:text-magenta transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Connect Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-charcoal">Connect</h4>
                        <ul className="space-y-4">
                            {['About David', 'Writing Process', 'Newsletter', 'Contact', 'RSS Feed'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-charcoal/70 hover:text-cyan transition-colors hover:translate-x-1 inline-block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal/Other */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-charcoal">Info</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-charcoal/70 hover:text-yellow hover:text-charcoal transition-colors hover:translate-x-1 inline-block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-charcoal/5 pt-8 text-center text-charcoal/50 text-sm font-medium">
                    <p>© 2026 With David. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
