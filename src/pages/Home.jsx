import React from 'react';
import Hero from '../components/Hero';
import CategoryCards from '../components/CategoryCards';
import RecentWritings from '../components/RecentWritings';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';
import AnimatedPage from '../components/AnimatedPage';
import RevealOnScroll from '../components/RevealOnScroll';

const Home = () => {
    return (
        <AnimatedPage>
            <SEO
                title="Home"
                description="Welcome to With David - A digital garden exploring creativity, poetry, and personal essays."
            />
            <main>
                <Hero />
                <RevealOnScroll>
                    <CategoryCards />
                </RevealOnScroll>
                <RevealOnScroll>
                    <RecentWritings />
                </RevealOnScroll>
                <RevealOnScroll>
                    <Newsletter />
                </RevealOnScroll>
            </main>
        </AnimatedPage>
    );
};

export default Home;
