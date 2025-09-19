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
      <div className="bg-gray-900 text-white text-center py-1.5 px-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
        <span className="inline-flex items-center px-1.5 py-0.5 bg-blue-800 text-white text-xs font-bold uppercase rounded-sm mr-1 sm:mr-2">
          ●&nbsp;RECENT
        </span>
        <span className="hidden sm:inline">TORONTO RECENT: Latest updates on municipal developments</span>
        <span className="sm:hidden">Latest updates on municipal developments</span>
      </div>
      
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-2 sm:mb-4">
          <div className="text-xs text-news-meta font-medium uppercase tracking-wider">
            <span className="hidden sm:inline">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="sm:hidden">
              {new Date().toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
              })}
            </span>
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
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-black text-primary tracking-tight">
                Toronto Ledger
              </h1>
              <p className="text-xs sm:text-sm text-news-meta font-bold uppercase tracking-widest -mt-1">
                <span className="hidden sm:inline">Breaking News • Politics • Business</span>
                <span className="sm:hidden">Breaking News</span>
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
        <nav className="md:hidden flex items-center justify-center space-x-3 sm:space-x-6 mt-2 sm:mt-4 pt-2 sm:pt-4 border-t border-border">
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