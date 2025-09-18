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

        {/* About Section */}
        <section className="mt-16 bg-muted/50 rounded-lg p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-news-header">About Toronto Ledger</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-left">
                <p className="text-lg text-news-text leading-relaxed">
                  Toronto Ledger is the city's premier independent news source, committed to delivering accurate, 
                  timely, and comprehensive coverage of the stories that matter most to Torontonians.
                </p>
                <p className="text-news-text">
                  Since our founding, we've been dedicated to serving the diverse communities that make 
                  Toronto one of the world's great cities, from breaking news and politics to business, 
                  culture, and sports.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-bold text-xl mb-2 text-news-header">Our Values</h3>
                  <ul className="space-y-2 text-news-text">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <strong>Integrity:</strong> Fact-based, unbiased reporting
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <strong>Community:</strong> Amplifying local voices and stories
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <strong>Transparency:</strong> Accountability in journalism
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <strong>Diversity:</strong> Reflecting Toronto's multicultural identity
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="news-meta">
                Contact us: <a href="mailto:news@torontoleger.ca" className="text-primary hover:underline">news@torontoledger.ca</a> | 
                Follow us on social media for the latest updates
              </p>
            </div>
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
