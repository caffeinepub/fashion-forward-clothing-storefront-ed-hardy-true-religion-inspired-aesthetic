import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Product, Collection } from '../backend';

export function useGetCollections() {
  const { actor, isFetching } = useActor();

  return useQuery<Collection[]>({
    queryKey: ['collections'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCollections();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useGetProducts(collectionId?: bigint | null, tag?: string | null) {
  const { actor, isFetching } = useActor();

  return useQuery<Product[]>({
    queryKey: ['products', collectionId?.toString(), tag],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProducts(collectionId ?? null, tag ?? null);
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useGetProductById(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<Product>({
    queryKey: ['product', id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getProductById(id);
    },
    enabled: !!actor && !isFetching && !!id,
    staleTime: 5 * 60 * 1000,
  });
}
