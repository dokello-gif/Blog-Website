import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SearchOverlay from './SearchOverlay';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const navLinks = [
        { name: 'All Stories', href: '/' },
        { name: 'Poetry', href: '/category/poetry' },
        { name: 'Blog Posts', href: '/category/blog' },
        { name: 'Essays', href: '/category/essays' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-magenta/20 h-20">
                <div className="container mx-auto px-6 h-full flex items-center justify-between max-w-[1200px]">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src="/logo.jpg"
                            alt="With David Logo"
                            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="text-2xl font-bold font-heading text-charcoal">With David</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-base font-medium text-charcoal relative py-1 hover:text-cyan transition-colors duration-200 group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-magenta transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}

                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="text-charcoal hover:text-magenta transition-colors"
                        >
                            <Search size={20} />
                        </button>

                        <button className="bg-magenta text-white font-heading font-semibold px-8 py-3 rounded-full hover:bg-magenta/90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                            Subscribe
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-6">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="text-charcoal hover:text-magenta transition-colors"
                        >
                            <Search size={24} />
                        </button>
                        <button
                            className="text-charcoal hover:text-magenta transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>

                    {/* Mobile Navigation Overlay */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="absolute top-20 left-0 right-0 bg-cream/95 backdrop-blur-md border-b border-magenta/20 p-6 md:hidden shadow-xl"
                            >
                                <nav className="flex flex-col gap-6 items-center">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.href}
                                            className="text-xl font-medium text-charcoal hover:text-magenta transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <Link to="/contact" className="text-xl font-bold font-heading text-charcoal hover:text-magenta" onClick={() => setIsMenuOpen(false)}>
                                        Contact
                                    </Link>
                                    <button className="w-full bg-magenta text-white font-heading font-semibold px-8 py-4 rounded-full hover:bg-magenta/90 transition-all shadow-md mt-4">
                                        Subscribe
                                    </button>
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </header>

            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};

export default Header;
