import { Link } from "react-router-dom";
import { Article } from "@/types/article";
import { Card, CardContent } from "@/components/ui/card";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  return (
    <Link to={`/article/${article.id}`}>
      <Card className={`hover:shadow-lg transition-shadow duration-300 overflow-hidden ${featured ? 'md:col-span-2' : ''}`}>
        {article.imageUrl && (
          <div className={`relative overflow-hidden ${featured ? 'h-64 md:h-80' : 'h-48'}`}>
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardContent className="p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="news-meta font-medium">{article.category}</span>
              <span className="news-meta">{article.readTime} min read</span>
            </div>
            
            <h2 className={`news-headline font-bold leading-tight hover:text-news-link transition-colors ${
              featured ? 'text-xl md:text-2xl' : 'text-lg'
            }`}>
              {article.title}
            </h2>
            
            <p className="text-news-subheader leading-relaxed">
              {article.summary}
            </p>
            
            <div className="flex items-center justify-between pt-2">
              <span className="news-meta font-medium">{article.author}</span>
              <span className="news-meta">
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