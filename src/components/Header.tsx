import { Link, useNavigate } from "react-router-dom";
import { Newspaper, Search, Menu } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="news-header sticky top-0 z-50 bg-white border-b-4 border-primary">
      {/* Recent News Banner */}
      <div className="bg-blue-600 text-white text-center py-2 px-4 text-sm font-bold uppercase tracking-wider">
        <span className="inline-flex items-center px-2 py-1 bg-blue-600 text-white text-xs font-bold uppercase rounded-sm mr-2">
          ●&nbsp;RECENT
        </span>
        TORONTO RECENT: Latest updates on municipal developments
      </div>
      
      <div className="container mx-auto px-4 py-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs text-news-meta font-medium uppercase tracking-wider">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div className="flex items-center space-x-4">
            <Search className="h-4 w-4 text-news-meta hover:text-primary cursor-pointer" />
            <Menu className="h-5 w-5 text-news-meta hover:text-primary cursor-pointer md:hidden" />
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between">
          <a href="/" onClick={handleHomeClick} className="flex items-center space-x-3 group">
            <div className="p-2 bg-primary/5 rounded-sm group-hover:bg-primary/10 transition-colors">
              <Newspaper className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-black text-primary tracking-tight">
                Toronto Ledger
              </h1>
              <p className="text-sm text-news-meta font-bold uppercase tracking-widest -mt-1">
                Breaking News • Politics • Business
              </p>
            </div>
          </a>
          
          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a 
              href="/" 
              onClick={handleHomeClick} 
              className="news-link font-bold px-4 py-2 border-b-2 border-transparent hover:border-primary transition-all uppercase text-sm tracking-wide"
            >
              Home
            </a>
            <Link 
              to="/politics" 
              className="news-link font-bold px-4 py-2 border-b-2 border-transparent hover:border-primary transition-all uppercase text-sm tracking-wide"
            >
              Politics
            </Link>
            <Link 
              to="/business" 
              className="news-link font-bold px-4 py-2 border-b-2 border-transparent hover:border-primary transition-all uppercase text-sm tracking-wide"
            >
              Business
            </Link>
            <Link 
              to="/culture" 
              className="news-link font-bold px-4 py-2 border-b-2 border-transparent hover:border-primary transition-all uppercase text-sm tracking-wide"
            >
              Culture
            </Link>
            <Link 
              to="/sports" 
              className="news-link font-bold px-4 py-2 border-b-2 border-transparent hover:border-primary transition-all uppercase text-sm tracking-wide"
            >
              Sports
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-border">
          <a href="/" onClick={handleHomeClick} className="news-link font-semibold text-xs uppercase">Home</a>
          <Link to="/politics" className="news-link font-semibold text-xs uppercase">Politics</Link>
          <Link to="/business" className="news-link font-semibold text-xs uppercase">Business</Link>
          <Link to="/culture" className="news-link font-semibold text-xs uppercase">Culture</Link>
          <Link to="/sports" className="news-link font-semibold text-xs uppercase">Sports</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;