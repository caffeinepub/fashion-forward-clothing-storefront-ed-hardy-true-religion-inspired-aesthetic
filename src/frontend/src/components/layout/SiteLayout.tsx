import { type ReactNode } from 'react';
import { HeaderNav } from '../nav/HeaderNav';
import { TextureBackground } from '../theme/TextureBackground';

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'unknown-app';

  return (
    <div className="relative min-h-screen flex flex-col">
      <TextureBackground />
      <HeaderNav />
      <main className="flex-1 relative z-10">{children}</main>
      <footer className="relative z-10 border-t-2 border-accent bg-background/95 backdrop-blur-sm py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground font-display">
            © {currentYear} Rebel Threads. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 font-display">
            Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-bold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
