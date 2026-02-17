import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { useGetProducts, useGetCollections } from '../hooks/useQueries';
import { LoadingState } from '../components/feedback/LoadingState';
import { ErrorState } from '../components/feedback/ErrorState';
import { getProductImagePath } from '../lib/imagePaths';

export default function ShopPage() {
  const [selectedCollection, setSelectedCollection] = useState<bigint | null>(null);
  const collectionsQuery = useGetCollections();
  const productsQuery = useGetProducts(selectedCollection);

  if (collectionsQuery.isLoading || productsQuery.isLoading) {
    return <LoadingState message="Loading products..." />;
  }

  if (collectionsQuery.isError) {
    return <ErrorState message="Failed to load collections" onRetry={() => collectionsQuery.refetch()} />;
  }

  if (productsQuery.isError) {
    return <ErrorState message="Failed to load products" onRetry={() => productsQuery.refetch()} />;
  }

  const collections = collectionsQuery.data || [];
  const products = productsQuery.data || [];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">Shop</h1>
        <p className="text-lg text-muted-foreground">Discover our latest collection of bold, rebellious fashion</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedCollection(null)}
          className={`px-6 py-2 rounded-lg font-display font-bold uppercase tracking-wide transition-all border-2 ${
            selectedCollection === null
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-background text-foreground border-accent hover:border-primary'
          }`}
        >
          All
        </button>
        {collections.map((collection) => (
          <button
            key={collection.id.toString()}
            onClick={() => setSelectedCollection(collection.id)}
            className={`px-6 py-2 rounded-lg font-display font-bold uppercase tracking-wide transition-all border-2 ${
              selectedCollection === collection.id
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-foreground border-accent hover:border-primary'
            }`}
          >
            {collection.name}
          </button>
        ))}
      </div>

      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground font-display">No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id.toString()}
              to="/product/$productId"
              params={{ productId: product.id.toString() }}
              className="group"
            >
              <div className="bg-card border-2 border-accent rounded-lg overflow-hidden hover:border-primary transition-all hover:shadow-xl">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={getProductImagePath(product.images[0])}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-lg uppercase tracking-wide mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-display font-black text-primary">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
