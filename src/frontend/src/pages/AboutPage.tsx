import { Shield, Heart, Flame } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight mb-8 text-center">
          About Rebel Threads
        </h1>

        <div className="prose prose-lg max-w-none mb-12">
          <div className="bg-card border-2 border-accent rounded-lg p-8 mb-8">
            <p className="text-xl leading-relaxed text-muted-foreground mb-6">
              Born from the fusion of tattoo culture and premium denim craftsmanship, Rebel Threads represents more
              than just clothing—it's a declaration that good triumphs over evil. We create pieces for those who dare
              to stand on the side of light, who wear their righteousness proudly, and who understand that fashion can
              be a force for good in the world.
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Every stitch, every graphic, every embellishment tells a story of the eternal battle between darkness and
              light. From guardian angels to demon slayers, our designs embody the victory of virtue over vice. We
              don't just follow trends—we champion a cause.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-accent/30 rounded-lg border-2 border-accent">
              <Shield className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-3">Righteous Design</h3>
              <p className="text-muted-foreground">
                Inspired by sacred symbols and angelic imagery, our designs celebrate the triumph of good over evil.
              </p>
            </div>

            <div className="text-center p-6 bg-accent/30 rounded-lg border-2 border-accent">
              <Heart className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                We use only the finest materials and construction techniques to ensure every piece lasts.
              </p>
            </div>

            <div className="text-center p-6 bg-accent/30 rounded-lg border-2 border-accent">
              <Flame className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-3">Battle-Tested Style</h3>
              <p className="text-muted-foreground">
                We stay true to our mission while constantly pushing the boundaries of fashion forward.
              </p>
            </div>
          </div>

          <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 text-center">
            <h2 className="text-3xl font-display font-black uppercase tracking-tight mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower individuals to stand on the side of light through bold, high-quality fashion that celebrates
              the triumph of good over evil. We believe that what you wear can be a statement of your values—a reminder
              that righteousness, courage, and virtue will always prevail over darkness. Good triumphs over evil, and
              we wear that truth with pride.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
