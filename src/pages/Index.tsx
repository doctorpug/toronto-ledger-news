import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import torontoHero from "@/assets/toronto-hero.jpg";

const Index = () => {
  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="h-64 md:h-80 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center overflow-hidden">
          <img 
            src={torontoHero} 
            alt="Toronto skyline" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
          />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Toronto Ledger
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl">
              Your trusted source for Toronto news, politics, business, and culture
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Featured Article */}
        {featuredArticle && (
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6 text-news-header">Featured Story</h2>
            <ArticleCard article={featuredArticle} featured={true} />
          </section>
        )}

        {/* Latest Articles */}
        <section>
          <h2 className="text-2xl font-serif font-bold mb-6 text-news-header">Latest News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="news-meta">
            © 2024 Toronto Ledger. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
