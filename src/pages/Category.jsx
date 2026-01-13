import React from 'react';
import { useParams, Link } from 'react-router-dom';
import WritingCard from '../components/WritingCard';
import { ArrowLeft, Heart, FileText, PenTool } from 'lucide-react';
import { writings } from '../data/writings';
import SEO from '../components/SEO';

const Category = () => {
    const { categoryId } = useParams();

    // Capitalize first letter
    const categoryTitle = categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : 'Categories';

    const categoryIcons = {
        'poetry': { icon: Heart, color: 'text-magenta', bg: 'bg-magenta/5', border: 'border-magenta' },
        'blog': { icon: FileText, color: 'text-yellow', bg: 'bg-yellow/5', border: 'border-yellow' },
        'essays': { icon: PenTool, color: 'text-cyan', bg: 'bg-cyan/5', border: 'border-cyan' }
    };

    const style = categoryIcons[categoryId] || categoryIcons['poetry'];
    const Icon = style.icon;

    // Filtering Logic
    const filteredWritings = writings.filter(writing => {
        // Normalize IDs and Categories
        // categoryId: 'poetry', 'blog', 'essays'
        // writing.category: 'Poetry', 'Blog', 'Essay'

        const catId = categoryId ? categoryId.toLowerCase() : '';
        const writingCat = writing.category.toLowerCase();

        if (catId === 'poetry') return writingCat === 'poetry';
        if (catId === 'blog') return writingCat === 'blog';
        // Map 'essays' (plural ID) to 'essay' (singular data category)
        if (catId === 'essays') return writingCat === 'essay';

        return true; // Show all if no valid category matched (fallback)
    });

    return (
        <section className="pt-32 pb-20 px-6 bg-cream min-h-screen">
            <SEO
                title={categoryTitle}
                description={`Explore a curated collection of ${categoryTitle.toLowerCase()} pieces.`}
            />
            <div className="container mx-auto max-w-[1200px]">
                {/* Back Link */}
                <Link to="/" className="inline-flex items-center gap-2 text-cyan font-medium hover:text-magenta transition-colors mb-12 group">
                    <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                    Back to all stories
                </Link>

                {/* Header */}
                <div className={`mb-16 p-8 rounded-2xl ${style.bg} border ${style.border} border-opacity-20 flex items-start md:items-center gap-6 md:gap-8`}>
                    <div className={`p-4 bg-white rounded-full shadow-sm ${style.color}`}>
                        <Icon size={40} />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-4">
                            {categoryTitle}
                        </h1>
                        <p className="text-lg text-charcoal/70 max-w-2xl">
                            A curated collection of {categoryTitle.toLowerCase()} pieces. Explore thoughts, feelings, and creative expressions.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                {filteredWritings.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredWritings.map((writing, index) => (
                            <WritingCard
                                key={writing.id}
                                {...writing}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl text-charcoal/60">No writings found in this category yet.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Category;
