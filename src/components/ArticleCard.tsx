import { Link } from "react-router-dom";
import { Article } from "@/types/article";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User, Calendar, TrendingUp } from "lucide-react";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const getCategoryClass = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      politics: 'category-politics',
      business: 'category-business',
      sports: 'category-sports',
      culture: 'category-culture',
      breaking: 'category-breaking',
      transportation: 'category-transportation',
      lifestyle: 'category-lifestyle',
      development: 'category-development'
    };
    return categoryMap[category.toLowerCase()] || 'category-breaking';
  };

  return (
    <Link to={`/article/${article.id}`} className="block group">
      <Card className={`news-card group-hover:shadow-2xl border-0 shadow-lg ${featured ? 'md:col-span-2 lg:col-span-3 featured-card' : ''}`}>
        {article.imageUrl && (
          <div className={`relative overflow-hidden bg-muted ${featured ? 'h-80 md:h-[28rem]' : 'h-64'}`}>
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className={`category-badge rounded-none ${getCategoryClass(article.category)}`}>
                {article.category.toUpperCase()}
              </span>
            </div>

            {/* Trending Indicator for Featured */}
            {featured && (
              <div className="absolute top-4 right-4">
                <div className="flex items-center space-x-1 bg-blue-800 text-white px-2 py-1 text-xs font-bold uppercase">
                  <TrendingUp className="h-3 w-3" />
                  <span>Trending</span>
                </div>
              </div>
            )}

            {/* Title Overlay for Featured Articles */}
            {featured && (
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h2 className="breaking-headline text-white mb-3 drop-shadow-lg">
                  {article.title}
                </h2>
                <p className="text-white/90 text-lg leading-relaxed drop-shadow-md">
                  {article.summary}
                </p>
              </div>
            )}
          </div>
        )}
        
        {!featured && (
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              <h2 className="news-headline text-xl leading-tight group-hover:text-primary transition-colors duration-200">
                {article.title}
              </h2>
              
              <p className="news-text leading-relaxed">
                {article.summary}
              </p>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-border/30">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1.5 text-news-meta">
                  <User className="h-3 w-3" />
                  <span className="font-semibold text-xs uppercase tracking-wider">{article.author}</span>
                </div>
                <div className="flex items-center space-x-1.5 text-news-meta">
                  <Clock className="h-3 w-3" />
                  <span className="text-xs font-medium">{article.readTime} min read</span>
                </div>
              </div>
              <div className="flex items-center space-x-1.5 text-news-meta">
                <Calendar className="h-3 w-3" />
                <span className="text-xs font-medium">
                  {new Date(article.publishDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </CardContent>
        )}

        {/* Featured Article Metadata */}
        {featured && (
          <CardContent className="p-6 md:p-8 border-t-4 border-primary">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-news-meta">
                  <User className="h-4 w-4" />
                  <span className="font-bold text-sm uppercase tracking-wider">{article.author}</span>
                </div>
                <div className="flex items-center space-x-2 text-news-meta">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{article.readTime} min read</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-news-meta">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {new Date(article.publishDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </Link>
  );
};

export default ArticleCard;