import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/articles";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center news-link mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Articles
          </Link>
          
          <article className="space-y-6">
            <header className="space-y-4 pb-6 border-b border-border">
              <div className="flex items-center space-x-4 text-sm">
                <span className="news-meta font-medium">{article.category}</span>
                <span className="news-meta">•</span>
                <span className="news-meta">{article.readTime} min read</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl news-headline font-bold leading-tight">
                {article.title}
              </h1>
              
              <p className="text-lg md:text-xl text-news-subheader leading-relaxed">
                {article.summary}
              </p>
              
              <div className="flex items-center justify-between pt-4">
                <div className="space-y-1">
                  <p className="font-medium text-news-header">By {article.author}</p>
                  <p className="news-meta">
                    Published {new Date(article.publishDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </header>
            
            {/* Featured Video */}
            {article.videoUrl && (
              <div className="mb-8">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={article.videoUrl}
                    title={`Interview: ${article.title}`}
                    className="w-full h-96 rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-sm news-meta text-center mt-2">
                  Exclusive interview with {article.title.includes(':') ? article.title.split(':')[1].trim() : 'featured subject'}
                </p>
              </div>
            )}
            
            <div className="article-content prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-xl md:text-2xl news-headline font-bold mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                
                if (paragraph.startsWith('- ')) {
                  const listItems = paragraph.split('\n- ').map(item => item.replace(/^- /, ''));
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 mb-6">
                      {listItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-foreground leading-relaxed">
                          {item.includes('**') ? (
                            <span>
                              {item.split('**').map((part, partIndex) => 
                                partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part
                              )}
                            </span>
                          ) : item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                
                return (
                  <p key={index} className="mb-6 leading-relaxed text-foreground text-base md:text-lg">
                    {paragraph}
                  </p>
                );
              })}
            </div>
            
            <div className="pt-8 border-t border-border">
              <Link to="/">
                <Button variant="outline" size="lg">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Read More Articles
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Article;