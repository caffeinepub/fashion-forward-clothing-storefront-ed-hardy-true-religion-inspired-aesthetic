import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useContactSubmission() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({ name, email, message }: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContactMessage(name, email, message);
    },
  });
}
