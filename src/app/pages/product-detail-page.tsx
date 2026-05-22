import { useState } from "react";
import { Link, useParams } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { BottomNav } from "../components/bottom-nav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { mockProducts } from "../data/mock-data";
import { getProductImage } from "../utils/image-map";
import { Camera, Heart, Store, Star, ArrowLeft, Phone } from "lucide-react";
import { toast } from "sonner";

export function ProductDetailPage() {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isSaved, setIsSaved] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const colorMap: Record<string, string> = {
    'Brown': '#8B4513',
    'Black': '#000000',
    'White': '#FFFFFF',
    'Natural': '#D2B48C',
    'Gray': '#808080',
    'Beige': '#F5F5DC',
  };

  const handleSendInquiry = () => {
    setInquiryOpen(false);
    toast.success("Inquiry sent! The store will contact you shortly.");
  };

  return (
    <div 
      className="min-h-screen pb-24 lg:pb-8"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto p-5 lg:p-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:underline">Catalog</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-primary)' }}>{product.name}</span>
        </div>

        {/* Back Button Mobile */}
        <Link to="/catalog" className="lg:hidden inline-flex items-center gap-2 mb-4" style={{ color: 'var(--primary)' }}>
          <ArrowLeft className="h-4 w-4" />
          Back to Catalog
        </Link>

        <div className="grid lg:grid-cols-[55%_45%] gap-8 lg:gap-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'white' }}>
              <ImageWithFallback
                src={getProductImage(product.image)}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className="rounded-lg overflow-hidden border-2 transition-colors"
                  style={{ 
                    borderColor: selectedImage === idx ? 'var(--primary)' : 'var(--border)'
                  }}
                >
                  <ImageWithFallback
                    src={getProductImage(img)}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-6">
            <div>
              <h1 
                className="text-3xl lg:text-4xl mb-3"
                style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}
              >
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <Store className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Sold by <strong>{product.store}</strong>
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-current" style={{ color: '#FDB022' }} />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  ({product.reviews} reviews)
                </span>
              </div>
              <p 
                className="text-4xl font-bold mb-4"
                style={{ color: 'var(--primary)' }}
              >
                ₱{product.price.toLocaleString()}
              </p>
            </div>

            {/* Color Selector */}
            <div className="space-y-3">
              <h3 className="font-medium">Available Colors</h3>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className="w-12 h-12 rounded-full transition-all"
                    style={{
                      backgroundColor: colorMap[color],
                      border: selectedColor === color ? '3px solid var(--primary)' : '2px solid var(--border)',
                      boxShadow: selectedColor === color ? '0 0 0 2px white, 0 0 0 5px var(--primary)' : 'none'
                    }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Dimensions */}
            <div 
              className="p-4 rounded-lg space-y-2"
              style={{ backgroundColor: 'var(--bg)' }}
            >
              <h3 className="font-medium mb-2">Dimensions</h3>
              <div 
                className="grid grid-cols-3 gap-3 text-center"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Width</div>
                  <div className="font-medium">{product.dimensions.width} cm</div>
                </div>
                <div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Depth</div>
                  <div className="font-medium">{product.dimensions.depth} cm</div>
                </div>
                <div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Height</div>
                  <div className="font-medium">{product.dimensions.height} cm</div>
                </div>
              </div>
            </div>

            {/* Stock Status */}
            <div>
              <Badge 
                className="rounded-full px-3 py-1"
                style={{
                  backgroundColor: product.stock === 'In Stock' ? 'var(--success)' : product.stock === 'Limited' ? 'var(--accent)' : 'var(--destructive)',
                  color: 'white'
                }}
              >
                {product.stock}
              </Badge>
            </div>

            {/* AR Notice */}
            <div 
              className="p-4 rounded-lg flex items-start gap-3"
              style={{ backgroundColor: 'var(--primary-light)' }}
            >
              <Camera className="h-5 w-5 flex-shrink-0" style={{ color: 'var(--primary)' }} />
              <p className="text-sm" style={{ color: 'var(--primary)' }}>
                Point your camera at the floor to place this item in your room.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link to={`/ar-viewer/${product.id}`}>
                <Button 
                  size="lg"
                  className="w-full rounded-[10px] h-12"
                  style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Try in AR
                </Button>
              </Link>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 rounded-[10px] h-12"
                  onClick={() => setIsSaved(!isSaved)}
                  style={{
                    borderColor: isSaved ? 'var(--primary)' : 'var(--border)',
                    color: isSaved ? 'var(--primary)' : 'var(--text-primary)'
                  }}
                >
                  <Heart className={`h-5 w-5 mr-2 ${isSaved ? 'fill-current' : ''}`} />
                  {isSaved ? 'Saved' : 'Save'}
                </Button>
                <Dialog open={inquiryOpen} onOpenChange={setInquiryOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 rounded-[10px] h-12"
                      style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Contact Store
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Send Inquiry to {product.store}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--bg)' }}>
                        <ImageWithFallback
                          src={getProductImage(product.image)}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>₱{product.price.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" placeholder="Juan dela Cruz" className="rounded-[10px]" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+63 912 345 6789" className="rounded-[10px]" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder={`I'm interested in this ${product.name}. Is it available in ${selectedColor}?`}
                          className="rounded-[10px]"
                          rows={4}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          onClick={handleSendInquiry}
                          className="flex-1 rounded-[10px]"
                          style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                        >
                          Send Inquiry
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => setInquiryOpen(false)}
                          className="rounded-[10px]"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* About Item */}
            <div className="space-y-3">
              <h3 className="font-medium text-lg">About this Item</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{product.description}</p>
            </div>

            {/* Room Suitability */}
            <div className="space-y-3">
              <h3 className="font-medium text-lg">Ideal For</h3>
              <div className="flex flex-wrap gap-2">
                {product.suitableFor.map(room => (
                  <Badge 
                    key={room} 
                    variant="outline"
                    className="rounded-full px-3 py-1"
                    style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                  >
                    {room}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Store Info */}
            <div 
              className="p-5 rounded-2xl space-y-3"
              style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
            >
              <h3 className="font-medium text-lg">Store Information</h3>
              <div className="flex items-center gap-2">
                <Store className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                <div>
                  <p className="font-medium">{product.store}</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Mamburao, Occidental Mindoro</p>
                </div>
              </div>
              <Link to={`/catalog?store=${product.store}`}>
                <Button 
                  variant="outline" 
                  className="w-full rounded-[10px]"
                  style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                >
                  View All Products from this Store
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div 
        className="lg:hidden fixed bottom-16 left-0 right-0 p-4 flex gap-3"
        style={{ backgroundColor: 'white', boxShadow: '0 -2px 12px rgba(0,0,0,0.08)' }}
      >
        <Link to={`/ar-viewer/${product.id}`} className="flex-1">
          <Button 
            size="lg"
            className="w-full rounded-[10px]"
            style={{ backgroundColor: 'var(--primary)', color: 'white' }}
          >
            <Camera className="h-5 w-5 mr-2" />
            Try in AR
          </Button>
        </Link>
        <Button
          variant="outline"
          size="lg"
          onClick={() => setIsSaved(!isSaved)}
          className="rounded-[10px] px-4"
          style={{
            borderColor: isSaved ? 'var(--primary)' : 'var(--border)',
            color: isSaved ? 'var(--primary)' : 'var(--text-primary)'
          }}
        >
          <Heart className={`h-5 w-5 ${isSaved ? 'fill-current' : ''}`} />
        </Button>
      </div>

      <BottomNav />
    </div>
  );
}
