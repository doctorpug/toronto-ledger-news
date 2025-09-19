import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { Palette, Music, Camera } from "lucide-react";

const Culture = () => {
  const cultureArticles = articles.filter(article => article.category === "Culture");
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Culture Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-primary/20 rounded-full">
                <Palette className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-news-header">
              Culture
            </h1>
            <p className="text-xl text-news-subheader leading-relaxed max-w-3xl mx-auto">
              Explore Toronto's vibrant cultural scene, from world-class museums and galleries to music festivals, theater productions, and the diverse traditions that make our city unique.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-news-meta">
              <div className="flex items-center space-x-2">
                <Palette className="h-4 w-4" />
                <span>Arts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Music className="h-4 w-4" />
                <span>Entertainment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Camera className="h-4 w-4" />
                <span>Events</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Articles */}
      <main className="container mx-auto px-6 py-12">
        {cultureArticles.length > 0 ? (
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-serif font-bold text-news-header">Latest Cultural News</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cultureArticles.map((article, index) => (
                <div key={article.id} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-16">
            <Palette className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-news-header mb-2">No Cultural Articles Yet</h2>
            <p className="text-news-meta">
              We're working on bringing you the latest cultural coverage. Check back soon!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Culture;