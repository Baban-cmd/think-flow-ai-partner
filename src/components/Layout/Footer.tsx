import { Github, Twitter, MessageSquare, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Chat', href: '/chat' },
        { label: 'Prompts', href: '/prompts' },
        { label: 'Explore', href: '/explore' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'GDPR', href: '/gdpr' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Community', href: '/community' },
        { label: 'Status', href: '/status' },
      ],
    },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-gradient-primary">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">ThinkFlow AI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your personal AI thinking partner. Empowering creativity, productivity, 
              and learning through intelligent conversations powered by cutting-edge AI.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-ai-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-ai-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-ai-primary transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-ai-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ThinkFlow AI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Built with ❤️ using cutting-edge AI technology
          </p>
        </div>
      </div>
    </footer>
  );
}