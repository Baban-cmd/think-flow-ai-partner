import { Moon, Sun, Sparkles, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/chat', label: 'Chat' },
    { path: '/prompts', label: 'Prompts' },
    { path: '/explore', label: 'Explore' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="p-2 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-200">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gradient">ThinkFlow AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 hover:text-ai-primary ${
                isActive(item.path) ? 'text-ai-primary' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-white/10"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <div className="hidden md:flex items-center space-x-2">
            <Link to="/chat">
              <Button variant="outline" className="glass border-white/20 hover:bg-white/10">
                Try Now
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-border/50 backdrop-blur-xl">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-sm font-medium transition-colors duration-200 hover:text-ai-primary ${
                  isActive(item.path) ? 'text-ai-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border/50 space-y-2">
              <Link to="/chat" className="block">
                <Button variant="outline" className="w-full glass border-white/20">
                  Try Now
                </Button>
              </Link>
              <Link to="/login" className="block">
                <Button className="w-full bg-gradient-primary">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}