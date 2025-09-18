import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/95 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Newspaper className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-news-header tracking-tight">
                Toronto Ledger
              </h1>
              <p className="text-xs text-news-meta font-medium uppercase tracking-wide">
                Independent News
              </p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="news-link font-medium px-3 py-2 rounded-lg hover:bg-accent/50 transition-all">
              Home
            </Link>
            <a href="#politics" className="news-link font-medium px-3 py-2 rounded-lg hover:bg-accent/50 transition-all">
              Politics
            </a>
            <a href="#business" className="news-link font-medium px-3 py-2 rounded-lg hover:bg-accent/50 transition-all">
              Business
            </a>
            <a href="#culture" className="news-link font-medium px-3 py-2 rounded-lg hover:bg-accent/50 transition-all">
              Culture
            </a>
            <a href="#sports" className="news-link font-medium px-3 py-2 rounded-lg hover:bg-accent/50 transition-all">
              Sports
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;