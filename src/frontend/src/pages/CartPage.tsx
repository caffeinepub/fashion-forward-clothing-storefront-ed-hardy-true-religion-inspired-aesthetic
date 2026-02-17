import { Link } from '@tanstack/react-router';
import { useCart } from '../hooks/useCart';
import { getProductImagePath } from '../lib/imagePaths';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getSubtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-3xl font-display font-black uppercase tracking-tight mb-4">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-8">Add some rebellious style to your wardrobe!</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wide py-3 px-6 rounded-lg hover:bg-primary/90 transition-all border-2 border-primary"
          >
            Shop Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id.toString()}
              className="bg-card border-2 border-accent rounded-lg p-4 flex gap-4"
            >
              <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={getProductImagePath(item.product.images[0])}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <Link
                  to="/product/$productId"
                  params={{ productId: item.product.id.toString() }}
                  className="font-display font-bold text-lg uppercase tracking-wide hover:text-primary transition-colors"
                >
                  {item.product.name}
                </Link>
                <p className="text-primary font-display font-bold text-xl mt-1">
                  ${item.product.price.toFixed(2)}
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 bg-accent hover:bg-primary hover:text-primary-foreground rounded font-bold transition-colors border border-accent hover:border-primary"
                    >
                      -
                    </button>
                    <span className="font-display font-bold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-8 h-8 bg-accent hover:bg-primary hover:text-primary-foreground rounded font-bold transition-colors border border-accent hover:border-primary"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="ml-auto text-destructive hover:text-destructive/80 transition-colors p-2"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-display font-bold text-xl">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card border-2 border-accent rounded-lg p-6 sticky top-24">
            <h2 className="text-2xl font-display font-black uppercase tracking-tight mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-lg">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-display font-bold">${getSubtotal().toFixed(2)}</span>
              </div>
              <div className="border-t-2 border-accent pt-4">
                <div className="flex justify-between text-2xl">
                  <span className="font-display font-black uppercase">Total</span>
                  <span className="font-display font-black text-primary">${getSubtotal().toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-primary text-primary-foreground font-display font-bold uppercase tracking-wide py-4 px-6 rounded-lg hover:bg-primary/90 transition-all border-2 border-primary shadow-lg hover:shadow-xl mb-4">
              Checkout
            </button>

            <Link
              to="/shop"
              className="block text-center text-primary hover:text-primary/80 font-display font-bold uppercase tracking-wide transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
