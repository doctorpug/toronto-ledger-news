import { Link } from "react-router-dom";
import { Article } from "@/types/article";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User, Calendar } from "lucide-react";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  return (
    <Link to={`/article/${article.id}`} className="block group">
      <Card className={`news-card group-hover:shadow-xl ${featured ? 'md:col-span-2 lg:col-span-3' : ''}`}>
        {article.imageUrl && (
          <div className={`relative overflow-hidden bg-muted ${featured ? 'h-72 md:h-96' : 'h-56'}`}>
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground shadow-sm">
                {article.category}
              </span>
            </div>
          </div>
        )}
        <CardContent className={`${featured ? 'p-8' : 'p-6'} space-y-4`}>
          <div className="space-y-3">
            <h2 className={`news-headline group-hover:text-news-link transition-colors duration-200 ${
              featured ? 'text-2xl md:text-3xl leading-tight' : 'text-xl leading-tight'
            }`}>
              {article.title}
            </h2>
            
            <p className={`news-text leading-relaxed ${featured ? 'text-lg' : ''}`}>
              {article.summary}
            </p>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1.5 text-news-meta">
                <User className="h-4 w-4" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center space-x-1.5 text-news-meta">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} min read</span>
              </div>
            </div>
            <div className="flex items-center space-x-1.5 text-news-meta">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(article.publishDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;