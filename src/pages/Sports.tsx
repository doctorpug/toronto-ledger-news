import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { Trophy, Target, Zap } from "lucide-react";

const Sports = () => {
  const sportsArticles = articles.filter(article => article.category === "Sports");
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Sports Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-primary/20 rounded-full">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-news-header">
              Sports
            </h1>
            <p className="text-xl text-news-subheader leading-relaxed max-w-3xl mx-auto">
              Follow Toronto's sports scene, from the Raptors and Maple Leafs to TFC and local athletics. Get the latest scores, analysis, and stories from the world of sports.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-news-meta">
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4" />
                <span>Professional Teams</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-4 w-4" />
                <span>Local Sports</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Game Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Articles */}
      <main className="container mx-auto px-6 py-12">
        {sportsArticles.length > 0 ? (
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-serif font-bold text-news-header">Latest Sports News</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sportsArticles.map((article, index) => (
                <div key={article.id} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-16">
            <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-news-header mb-2">No Sports Articles Yet</h2>
            <p className="text-news-meta">
              We're working on bringing you the latest sports coverage. Check back soon!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Sports;