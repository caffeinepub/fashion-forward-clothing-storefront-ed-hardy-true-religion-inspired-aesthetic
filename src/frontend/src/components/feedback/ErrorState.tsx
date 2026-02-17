import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ message = 'Something went wrong', onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-destructive/10 border-2 border-destructive rounded-lg p-8 max-w-md w-full">
        <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
        <h3 className="text-xl font-display font-bold text-center mb-2 uppercase tracking-wide">Error</h3>
        <p className="text-center text-muted-foreground mb-6">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="w-full bg-primary text-primary-foreground font-display font-bold uppercase tracking-wide py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors border-2 border-primary"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
