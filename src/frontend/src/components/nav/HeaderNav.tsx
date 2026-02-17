import { Link, useNavigate } from '@tanstack/react-router';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { useState } from 'react';

export function HeaderNav() {
  const navigate = useNavigate();
  const totalItems = useCart((state) => state.getTotalItems());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-4 border-accent bg-background/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/generated/brand-logo.dim_512x512.png"
              alt="Rebel Threads"
              className="h-12 w-12 object-contain transition-transform group-hover:scale-110"
            />
            <span className="text-2xl font-display font-black tracking-tight text-foreground uppercase">
              Rebel Threads
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-base font-display font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
            <button
              onClick={() => navigate({ to: '/cart' })}
              className="relative p-2 hover:bg-accent rounded-lg transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-background">
                  {totalItems}
                </span>
              )}
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-accent">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-base font-display font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate({ to: '/cart' });
              }}
              className="flex items-center gap-2 py-3 text-base font-display font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              Cart {totalItems > 0 && `(${totalItems})`}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
