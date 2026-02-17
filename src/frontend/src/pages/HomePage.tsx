import { Link } from '@tanstack/react-router';
import { ArrowRight, Shield, Flame, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative">
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/generated/hero-banner-triumph.dim_1600x900.png)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight mb-6 text-foreground drop-shadow-lg">
              Where Light
              <br />
              <span className="text-primary">Conquers Darkness</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/90 font-display font-bold drop-shadow">
              Wear the armor of righteousness. Good triumphs over evil.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wide py-4 px-8 rounded-lg hover:bg-primary/90 transition-all border-4 border-primary shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-background/80 backdrop-blur-sm rounded-lg border-2 border-accent">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-2">Righteous Armor</h3>
              <p className="text-muted-foreground">Designs that embody protection and virtue</p>
            </div>
            <div className="text-center p-8 bg-background/80 backdrop-blur-sm rounded-lg border-2 border-accent">
              <Flame className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-2">Battle Ready</h3>
              <p className="text-muted-foreground">Crafted for those who fight the good fight</p>
            </div>
            <div className="text-center p-8 bg-background/80 backdrop-blur-sm rounded-lg border-2 border-accent">
              <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-2">Divine Style</h3>
              <p className="text-muted-foreground">Where heavenly grace meets street edge</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mb-6">
              The Eternal Battle
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Rebel Threads stands on the side of light in the eternal struggle between good and evil. Each piece is a
              testament to the triumph of righteousness—bold graphics inspired by guardian angels, demon slayers, and
              sacred symbols, all crafted with premium denim and rebellious spirit. Wear your values. Stand for what's
              right. Let your style be your shield.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-display font-bold uppercase tracking-wide py-3 px-6 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Learn More
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
