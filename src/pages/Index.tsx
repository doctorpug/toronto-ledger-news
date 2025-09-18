import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import torontoHero from "@/assets/toronto-hero.jpg";
import { Mail, Users, Shield, Globe } from "lucide-react";

const Index = () => {
  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        <div className="h-96 md:h-[32rem] bg-gradient-to-br from-primary via-primary-light to-primary-dark flex items-center justify-center">
          <img 
            src={torontoHero} 
            alt="Toronto skyline" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-soft-light opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">
              Toronto Ledger
            </h1>
            <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
              Your trusted source for Toronto news, politics, business, and culture
            </p>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Independent</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Local Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Featured Article */}
        {featuredArticle && (
          <section className="mb-16 fade-in">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-serif font-bold text-news-header">Featured Story</h2>
            </div>
            <ArticleCard article={featuredArticle} featured={true} />
          </section>
        )}

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl font-serif font-bold text-news-header">Latest News</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <div key={article.id} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced About Section */}
        <section className="bg-gradient-to-br from-secondary via-muted/50 to-accent/30 rounded-2xl p-12 fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold mb-4 text-news-header">About Toronto Ledger</h2>
              <p className="text-xl text-news-subheader max-w-3xl mx-auto">
                The city's premier independent news source, serving Toronto's diverse communities since our founding.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-news-text leading-relaxed">
                  Toronto Ledger is committed to delivering accurate, timely, and comprehensive coverage 
                  of the stories that matter most to Torontonians. We believe in the power of independent journalism 
                  to inform, engage, and strengthen our community.
                </p>
                <p className="text-news-text leading-relaxed">
                  From breaking news and politics to business, culture, and sports, we cover the full spectrum 
                  of life in one of the world's most diverse and dynamic cities.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50">
                <h3 className="font-serif font-bold text-2xl mb-6 text-news-header">Our Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-news-header mb-1">Integrity</h4>
                      <p className="text-news-text text-sm">Fact-based, unbiased reporting you can trust</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-news-header mb-1">Community</h4>
                      <p className="text-news-text text-sm">Amplifying local voices and stories that matter</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Globe className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-news-header mb-1">Diversity</h4>
                      <p className="text-news-text text-sm">Reflecting Toronto's rich multicultural identity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-border/50 text-center">
              <div className="flex items-center justify-center space-x-2 text-news-meta mb-2">
                <Mail className="h-4 w-4" />
                <span>Contact us: </span>
                <a href="mailto:news@torontoledger.ca" className="news-link font-medium">
                  news@torontoledger.ca
                </a>
              </div>
              <p className="text-news-meta">
                Follow us on social media for the latest updates
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-muted to-secondary/50 mt-16 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-news-meta font-medium">
                © 2024 Toronto Ledger. All rights reserved.
              </p>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <p className="text-news-meta text-sm">
              Independent journalism for Toronto's diverse communities
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
