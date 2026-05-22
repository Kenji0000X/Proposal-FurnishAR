import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { BottomNav } from "../components/bottom-nav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { mockProducts } from "../data/mock-data";
import { getProductImage } from "../utils/image-map";
import { Camera, Eye, X, Heart } from "lucide-react";

export function SavedPage() {
  const [savedProducts, setSavedProducts] = useState(mockProducts.slice(0, 3));

  const handleRemove = (id: string) => {
    setSavedProducts(savedProducts.filter(p => p.id !== id));
  };

  const colorMap: Record<string, string> = {
    'Brown': '#8B4513',
    'Black': '#000000',
    'White': '#FFFFFF',
    'Natural': '#D2B48C',
    'Gray': '#808080',
    'Beige': '#F5F5DC',
  };

  return (
    <div 
      className="min-h-screen pb-20 lg:pb-8"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto p-5 lg:p-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 
              className="text-3xl lg:text-4xl mb-2"
              style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}
            >
              My Saved Items
            </h1>
            {savedProducts.length > 0 && (
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm"
                style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}
              >
                <Heart className="h-4 w-4 fill-current" />
                {savedProducts.length} {savedProducts.length === 1 ? 'item' : 'items'}
              </div>
            )}
          </div>
        </div>

        {/* Empty State */}
        {savedProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-5">
            <div className="text-8xl mb-6">🪑</div>
            <h2 
              className="text-2xl mb-3 text-center"
              style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}
            >
              Nothing saved yet
            </h2>
            <p className="text-center mb-8" style={{ color: 'var(--text-secondary)' }}>
              Browse the catalog to find furniture you love
            </p>
            <Link to="/catalog">
              <Button 
                size="lg"
                className="rounded-[10px]"
                style={{ backgroundColor: 'var(--primary)', color: 'white' }}
              >
                Browse Catalog
              </Button>
            </Link>
          </div>
        ) : (
          /* Saved Items Grid */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedProducts.map(product => (
              <div 
                key={product.id}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 relative group"
                style={{ 
                  backgroundColor: 'white',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                }}
              >
                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(product.id)}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white' }}
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={getProductImage(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{product.store}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {product.colors.slice(0, 3).map(color => (
                      <div
                        key={color}
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: colorMap[color], borderColor: 'var(--border)' }}
                        title={color}
                      />
                    ))}
                  </div>
                  <p className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>
                    ₱{product.price.toLocaleString()}
                  </p>
                  <div className="flex gap-2">
                    <Link to={`/ar-viewer/${product.id}`} className="flex-1">
                      <Button 
                        className="w-full rounded-[10px]"
                        style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                      >
                        <Camera className="h-4 w-4 mr-2" />
                        View in AR
                      </Button>
                    </Link>
                    <Link to={`/product/${product.id}`} className="flex-1">
                      <Button 
                        variant="outline" 
                        className="w-full rounded-[10px]"
                        style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
