import { ContactForm } from '../components/forms/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mb-4 text-center">
          Get In Touch
        </h1>
        <p className="text-lg text-muted-foreground mb-12 text-center">
          Have questions? Want to collaborate? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-display font-black uppercase tracking-tight mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg border-2 border-primary">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold uppercase tracking-wide mb-1">Email</h3>
                  <p className="text-muted-foreground">info@rebelthreads.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg border-2 border-primary">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold uppercase tracking-wide mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg border-2 border-primary">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold uppercase tracking-wide mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    123 Fashion District
                    <br />
                    Los Angeles, CA 90015
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/30 rounded-lg border-2 border-accent">
              <h3 className="font-display font-bold uppercase tracking-wide mb-2">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-display font-black uppercase tracking-tight mb-6">Send Us a Message</h2>
            <div className="bg-card border-2 border-accent rounded-lg p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
