import { useState } from 'react';
import { useContactSubmission } from '../../hooks/useContactSubmission';
import { Loader2, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const mutation = useContactSubmission();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email address';
    if (!message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await mutation.mutateAsync({ name, email, message });
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to submit contact form:', error);
    }
  };

  if (showSuccess) {
    return (
      <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 text-center">
        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-display font-bold uppercase tracking-wide mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-display font-bold uppercase tracking-wide mb-2">
          Name *
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border-2 border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          disabled={mutation.isPending}
        />
        {errors.name && <p className="text-destructive text-sm mt-1 font-display">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-display font-bold uppercase tracking-wide mb-2">
          Email *
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border-2 border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          disabled={mutation.isPending}
        />
        {errors.email && <p className="text-destructive text-sm mt-1 font-display">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-display font-bold uppercase tracking-wide mb-2">
          Message *
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full px-4 py-3 border-2 border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          disabled={mutation.isPending}
        />
        {errors.message && <p className="text-destructive text-sm mt-1 font-display">{errors.message}</p>}
      </div>

      {mutation.isError && (
        <div className="bg-destructive/10 border-2 border-destructive rounded-lg p-4">
          <p className="text-destructive text-sm font-display">Failed to send message. Please try again.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full bg-primary text-primary-foreground font-display font-bold uppercase tracking-wide py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors border-2 border-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {mutation.isPending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
