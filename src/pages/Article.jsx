import { ArticleSkeleton } from '../components/LoadingSkeleton';

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        client.fetch(getWritingBySlugQuery, { slug: id })
            .then((data) => {
                setArticle(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching article:', err);
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="pt-32 pb-20 px-6">
                <ArticleSkeleton />
            </div>
        );
    }

    if (error || !article) {
        return (
            <div className="pt-32 px-6 text-center">
                <h1 className="text-2xl font-bold font-heading text-charcoal mb-4">Article Not Found</h1>
                <Link to="/" className="text-magenta hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <article className="pt-32 pb-20 px-6">
            <SEO
                title={article.title}
                description={article.excerpt}
                keywords={`creative writing, ${article.category?.title.toLowerCase()}, ${article.title.toLowerCase()}`}
            />
            <div className="container mx-auto max-w-[700px]">
                {/* Back Link */}
                <Link to="/" className="inline-flex items-center gap-2 text-cyan font-medium hover:text-magenta transition-colors mb-8 group">
                    <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                    Back to all stories
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10"
                >
                    <div className="inline-block px-3 py-1 bg-magenta text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                        {article.category?.title || 'Uncategorized'}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-8 leading-tight">
                        {article.title}
                    </h1>

                    <div className="flex items-center gap-6 text-sm text-charcoal/60 font-medium border-b border-magenta/10 pb-8">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{formatDate(article.publishedAt)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{article.readTime}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-lg prose-charcoal max-w-none"
                >
                    <ReactMarkdown>{article.content}</ReactMarkdown>
                </motion.div>

                {/* Footer Actions */}
                <div className="mt-16 pt-8 border-t-2 border-magenta/10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-charcoal/60 hover:text-magenta transition-colors">
                            <Heart size={20} />
                            <span>{article.engagement}</span>
                        </button>
                    </div>

                    <button className="flex items-center gap-2 text-charcoal/60 hover:text-cyan transition-colors">
                        <Share2 size={20} />
                        <span>Share this story</span>
                    </button>
                </div>

                {/* Author Note */}
                <div className="mt-16 bg-cream p-8 rounded-2xl flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-magenta/10 flex items-center justify-center shrink-0">
                        <span className="font-heading font-bold text-magenta text-xl">D</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-2">Written by David</h3>
                        <p className="text-charcoal/70 leading-relaxed">
                            Thanks for reading! I write about creativity, life, and the messy process of being human. If you enjoyed this, consider subscribing to my newsletter.
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Article;
