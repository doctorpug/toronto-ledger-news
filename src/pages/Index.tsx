import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import torontoHero from "@/assets/toronto-hero.jpg";
import { Mail, TrendingUp, Clock, Users, AlertCircle } from "lucide-react";

const Index = () => {
  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);
  const breakingArticles = regularArticles.slice(0, 3);
  const latestArticles = regularArticles.slice(3);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Main News Grid Layout */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex-1">
        {/* Hero Section - CNN Style */}
        <section className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Main Featured Story */}
          {featuredArticle && (
            <div className="lg:col-span-2">
              <ArticleCard article={featuredArticle} featured={true} />
            </div>
          )}
          
            {/* Recent News Sidebar */}
            <div className="space-y-6">
              <div className="bg-red-600 text-white p-4 rounded-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <AlertCircle className="h-5 w-5" />
                  <h3 className="font-black uppercase text-sm tracking-wider">Recent News</h3>
                </div>
                <div className="space-y-3">
                  <div className="border-b border-red-500/30 pb-3">
                    <h4 className="font-bold text-sm leading-tight mb-1 hover:text-red-200 transition-colors">
                      Charlie Kirk Shot in Downtown Toronto Incident
                    </h4>
                    <p className="text-red-100 text-xs opacity-90">
                      2:30 PM
                    </p>
                  </div>
                  <div className="border-b border-red-500/30 pb-3">
                    <h4 className="font-bold text-sm leading-tight mb-1 hover:text-red-200 transition-colors">
                      Jimmy Kimmel Show Cancelled Following Controversy  
                    </h4>
                    <p className="text-red-100 text-xs opacity-90">
                      1:45 PM
                    </p>
                  </div>
                  <div className="pb-0">
                    <h4 className="font-bold text-sm leading-tight mb-1 hover:text-red-200 transition-colors">
                      Police Investigate 3 Destroyed Speed Cameras Across City
                    </h4>
                    <p className="text-red-100 text-xs opacity-90">
                      12:15 PM
                    </p>
                  </div>
                </div>
              </div>
            
            {/* Trending Topics */}
            <div className="bg-card border border-border rounded-sm p-4">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-black uppercase text-sm tracking-wider text-news-header">Trending</h3>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-news-link font-semibold hover:text-news-link-hover cursor-pointer">#TorontoElection2024</div>
                <div className="text-sm text-news-link font-semibold hover:text-news-link-hover cursor-pointer">#HousingCrisis</div>
                <div className="text-sm text-news-link font-semibold hover:text-news-link-hover cursor-pointer">#TransitExpansion</div>
                <div className="text-sm text-news-link font-semibold hover:text-news-link-hover cursor-pointer">#RaptorsPlayoffs</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="border-t-4 border-primary mb-8"></div>

        {/* Latest News Grid */}
        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <h2 className="text-3xl font-serif font-black text-news-header uppercase tracking-tight">Latest News</h2>
            <div className="flex-1 h-1 bg-primary"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {latestArticles.map((article, index) => (
              <div key={article.id} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { name: 'Politics', count: 8 },
            { name: 'Business', count: 12 },
            { name: 'Sports', count: 6 },
            { name: 'Culture', count: 9 }
          ].map((category) => (
            <div key={category.name} className="bg-gray-700 text-white p-6 rounded-sm hover:scale-105 hover:bg-gray-600 transition-all cursor-pointer">
              <h3 className="font-black text-xl mb-2 uppercase tracking-wide">{category.name}</h3>
              <p className="text-sm opacity-90">{category.count} articles</p>
            </div>
          ))}
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-sm mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-black mb-4 uppercase tracking-wide">Stay Informed</h3>
            <p className="mb-6 text-gray-300">Get breaking news and daily updates delivered to your inbox</p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-sm text-white placeholder-gray-300"
              />
              <button className="px-6 py-2 bg-red-600 hover:bg-red-700 font-bold uppercase text-sm tracking-wider rounded-r-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-black text-lg mb-4 uppercase tracking-wide">Sections</h4>
              <div className="space-y-2 text-sm">
                <div className="hover:text-red-400 cursor-pointer">Politics</div>
                <div className="hover:text-red-400 cursor-pointer">Business</div>
                <div className="hover:text-red-400 cursor-pointer">Sports</div>
                <div className="hover:text-red-400 cursor-pointer">Culture</div>
              </div>
            </div>
            <div>
              <h4 className="font-black text-lg mb-4 uppercase tracking-wide">About</h4>
              <div className="space-y-2 text-sm">
                <div className="hover:text-red-400 cursor-pointer">Our Team</div>
                <div className="hover:text-red-400 cursor-pointer">Editorial Policy</div>
                <div className="hover:text-red-400 cursor-pointer">Contact Us</div>
                <div className="hover:text-red-400 cursor-pointer">Careers</div>
              </div>
            </div>
            <div>
              <h4 className="font-black text-lg mb-4 uppercase tracking-wide">Follow</h4>
              <div className="space-y-2 text-sm">
                <div className="hover:text-red-400 cursor-pointer">Twitter</div>
                <div className="hover:text-red-400 cursor-pointer">Facebook</div>
                <div className="hover:text-red-400 cursor-pointer">Instagram</div>
                <div className="hover:text-red-400 cursor-pointer">YouTube</div>
              </div>
            </div>
            <div>
              <h4 className="font-black text-lg mb-4 uppercase tracking-wide">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>news@torontoledger.com</span>
                </div>
                <div>Toronto, ON</div>
                <div>+1 (416) 555-NEWS</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="h-4 w-4 text-red-500" />
              <span className="text-sm text-gray-400">© 2024 Toronto Ledger. All rights reserved.</span>
            </div>
            <p className="text-xs text-gray-500">
              Independent journalism • Serving Toronto since 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
