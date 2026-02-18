import { useState } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';
import { useGetProductById } from '../hooks/useQueries';
import { useCart } from '../hooks/useCart';
import { LoadingState } from '../components/feedback/LoadingState';
import { ErrorState } from '../components/feedback/ErrorState';
import { getProductImages, FALLBACK_IMAGE } from '../lib/imagePaths';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';

export default function ProductDetailsPage() {
  const { productId } = useParams({ from: '/product/$productId' });
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAddedConfirmation, setShowAddedConfirmation] = useState(false);

  const productQuery = useGetProductById(BigInt(productId));
  const addItem = useCart((state) => state.addItem);

  if (productQuery.isLoading) {
    return <LoadingState message="Loading product..." />;
  }

  if (productQuery.isError) {
    return <ErrorState message="Failed to load product" onRetry={() => productQuery.refetch()} />;
  }

  const product = productQuery.data;
  if (!product) {
    return <ErrorState message="Product not found" />;
  }

  const images = getProductImages(product.images);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setShowAddedConfirmation(true);
    setTimeout(() => setShowAddedConfirmation(false), 3000);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, index: number) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== FALLBACK_IMAGE) {
      target.src = FALLBACK_IMAGE;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <button
        onClick={() => navigate({ to: '/shop' })}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-display font-bold uppercase tracking-wide"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Shop
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 border-2 border-accent">
            <img 
              src={images[selectedImage]} 
              alt={product.name} 
              className="w-full h-full object-cover"
              onError={(e) => handleImageError(e, selectedImage)}
            />
          </div>
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-muted rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-accent hover:border-primary'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`} 
                    className="w-full h-full object-cover"
                    onError={(e) => handleImageError(e, index)}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
            {product.name}
          </h1>
          <p className="text-3xl font-display font-black text-primary mb-6">${product.price.toFixed(2)}</p>

          <div className="prose prose-lg mb-8">
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-accent text-foreground rounded-lg text-sm font-display font-bold uppercase tracking-wide border border-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-display font-bold uppercase tracking-wide mb-2">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 bg-accent hover:bg-primary hover:text-primary-foreground rounded-lg font-bold text-xl transition-colors border-2 border-accent hover:border-primary"
              >
                -
              </button>
              <span className="text-2xl font-display font-bold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 bg-accent hover:bg-primary hover:text-primary-foreground rounded-lg font-bold text-xl transition-colors border-2 border-accent hover:border-primary"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-primary text-primary-foreground font-display font-bold uppercase tracking-wide py-4 px-6 rounded-lg hover:bg-primary/90 transition-all border-2 border-primary flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            {showAddedConfirmation ? (
              <>
                <Check className="h-5 w-5" />
                Added to Cart!
              </>
            ) : (
              <>
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
