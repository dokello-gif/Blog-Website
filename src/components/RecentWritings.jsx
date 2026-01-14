import { CardSkeleton } from './LoadingSkeleton';

const RecentWritings = () => {
    const [writings, setWritings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.fetch(getAllWritingsQuery)
            .then((data) => {
                setWritings(data.slice(0, 6)); // Get top 6
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching writings:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="py-20 px-6 bg-cream border-t border-white/50">
                <div className="container mx-auto max-w-[1200px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <CardSkeleton key={n} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 px-6 bg-cream border-t border-white/50">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex items-end justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal">
                        Recent Writings
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {writings.map((writing, index) => (
                        <WritingCard
                            key={writing._id}
                            id={writing.slug}
                            title={writing.title}
                            excerpt={writing.excerpt}
                            category={writing.category?.title || 'Uncategorized'}
                            date={formatDate(writing.publishedAt)}
                            readTime={writing.readTime}
                            engagement={writing.engagement}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentWritings;
