import React from 'react';
import Hero from '../components/Hero';
import CategoryCards from '../components/CategoryCards';
import RecentWritings from '../components/RecentWritings';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="Home"
                description="Welcome to With David - A digital garden exploring creativity, poetry, and personal essays."
            />
            <main>
                <Hero />
                <CategoryCards />
                <RecentWritings />
                <Newsletter />
            </main>
        </>
    );
};

export default Home;
