import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { Vote, Users, Building2 } from "lucide-react";

const Politics = () => {
  const politicsArticles = articles.filter(article => article.category === "Politics");
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Politics Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-primary/20 rounded-full">
                <Vote className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-news-header">
              Politics
            </h1>
            <p className="text-xl text-news-subheader leading-relaxed max-w-3xl mx-auto">
              Stay informed about Toronto's political landscape, city council decisions, provincial updates, and federal policies affecting our community.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-news-meta">
              <div className="flex items-center space-x-2">
                <Building2 className="h-4 w-4" />
                <span>City Council</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Community Impact</span>
              </div>
              <div className="flex items-center space-x-2">
                <Vote className="h-4 w-4" />
                <span>Democracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Politics Articles */}
      <main className="container mx-auto px-6 py-12">
        {politicsArticles.length > 0 ? (
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-serif font-bold text-news-header">Latest Political News</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {politicsArticles.map((article, index) => (
                <div key={article.id} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-16">
            <Vote className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-news-header mb-2">No Political Articles Yet</h2>
            <p className="text-news-meta">
              We're working on bringing you the latest political coverage. Check back soon!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Politics;