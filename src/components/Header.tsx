import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-news-header">
              Toronto Ledger
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="news-link font-medium">
              Home
            </Link>
            <a href="#politics" className="news-link font-medium">
              Politics
            </a>
            <a href="#business" className="news-link font-medium">
              Business
            </a>
            <a href="#culture" className="news-link font-medium">
              Culture
            </a>
            <a href="#sports" className="news-link font-medium">
              Sports
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;