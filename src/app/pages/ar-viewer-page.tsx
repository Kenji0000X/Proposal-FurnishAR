import { useState } from "react";
import { Link, useParams } from "react-router";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { mockProducts } from "../data/mock-data";
import { getProductImage } from "../utils/image-map";
import { 
  ArrowLeft, 
  Camera, 
  RotateCcw, 
  RotateCw, 
  Minus, 
  Plus, 
  Move, 
  Ruler as RulerIcon, 
  Palette,
  X,
  ShoppingBag
} from "lucide-react";
import { toast } from "sonner";

export function ARViewerPage() {
  const { productId } = useParams();
  const product = mockProducts.find(p => p.id === productId) || mockProducts[0];
  const [isFloorDetected, setIsFloorDetected] = useState(false);
  const [showDimensions, setShowDimensions] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [screenshotDialogOpen, setScreenshotDialogOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const colorMap: Record<string, string> = {
    'Brown': '#8B4513',
    'Black': '#000000',
    'White': '#FFFFFF',
    'Natural': '#D2B48C',
    'Gray': '#808080',
    'Beige': '#F5F5DC',
  };

  // Simulate floor detection after component mount
  useState(() => {
    setTimeout(() => setIsFloorDetected(true), 2000);
  });

  const handleCapture = () => {
    setScreenshotDialogOpen(true);
  };

  const handleSaveImage = () => {
    toast.success("Screenshot saved to your device!");
    setScreenshotDialogOpen(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50"
      style={{ 
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: 'linear-gradient(to bottom, #1a1a1a, #2d2d2d)'
      }}
    >
      {/* Camera feed simulation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-2xl">
          {/* Animated scan lines when floor not detected */}
          {!isFloorDetected && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 relative">
                <div 
                  className="absolute inset-0 rounded-full border-4 animate-ping"
                  style={{ borderColor: 'var(--primary)', opacity: 0.3 }}
                />
                <div 
                  className="absolute inset-4 rounded-full border-4 animate-ping"
                  style={{ borderColor: 'var(--primary)', opacity: 0.5, animationDelay: '0.3s' }}
                />
              </div>
            </div>
          )}

          {/* 3D Furniture placeholder (simulated) */}
          {isFloorDetected && (
            <div className="absolute inset-0 flex items-end justify-center pb-32">
              <div className="relative">
                {/* Furniture image with shadow */}
                <div className="relative z-10">
                  <ImageWithFallback
                    src={getProductImage(product.image)}
                    alt={product.name}
                    className="w-64 h-64 object-contain drop-shadow-2xl"
                  />
                </div>
                
                {/* Ground shadow */}
                <div 
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full blur-xl"
                  style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                />

                {/* Dimension lines */}
                {showDimensions && (
                  <>
                    <div 
                      className="absolute -top-8 left-0 right-0 h-px"
                      style={{ backgroundColor: 'var(--primary)' }}
                    >
                      <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1 rounded text-xs whitespace-nowrap"
                        style={{ 
                          backgroundColor: 'var(--primary)', 
                          color: 'white',
                          fontFamily: "'DM Mono', monospace"
                        }}
                      >
                        {product.dimensions.width} cm
                      </div>
                    </div>
                    <div 
                      className="absolute top-0 bottom-0 -left-8 w-px"
                      style={{ backgroundColor: 'var(--primary)' }}
                    >
                      <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1 rounded text-xs whitespace-nowrap -rotate-90"
                        style={{ 
                          backgroundColor: 'var(--primary)', 
                          color: 'white',
                          fontFamily: "'DM Mono', monospace"
                        }}
                      >
                        {product.dimensions.height} cm
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Top Bar */}
      <div 
        className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)' }}
      >
        <Link to={`/product/${product.id}`}>
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <span className="text-white font-medium">{product.name}</span>
        <Link to="/room-scanner">
          <Button 
            variant="ghost"
            className="rounded-full text-white"
            style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          >
            <RulerIcon className="h-4 w-4 mr-2" />
            Room Scanner
          </Button>
        </Link>
      </div>

      {/* AR Status Badge */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10">
        <div 
          className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md"
          style={{
            backgroundColor: isFloorDetected ? 'rgba(22, 163, 74, 0.9)' : 'rgba(59, 110, 82, 0.9)',
            color: 'white'
          }}
        >
          {isFloorDetected ? '✓ Floor detected' : 'Scanning floor...'}
        </div>
      </div>

      {/* Bottom Controls */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-10 p-4"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
      >
        <div 
          className="max-w-2xl mx-auto rounded-2xl p-4 space-y-4 backdrop-blur-xl"
          style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
        >
          {/* Product Info */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-sm" style={{ color: 'var(--primary)' }}>
                ₱{product.price.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Control Buttons Row 1 */}
          <div className="grid grid-cols-5 gap-2">
            <Button
              variant="outline"
              className="flex flex-col items-center gap-1 h-auto py-3 rounded-[10px]"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="text-xs">Rotate L</span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col items-center gap-1 h-auto py-3 rounded-[10px]"
            >
              <RotateCw className="h-4 w-4" />
              <span className="text-xs">Rotate R</span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col items-center gap-1 h-auto py-3 rounded-[10px]"
            >
              <Minus className="h-4 w-4" />
              <span className="text-xs">Smaller</span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col items-center gap-1 h-auto py-3 rounded-[10px]"
            >
              <Plus className="h-4 w-4" />
              <span className="text-xs">Larger</span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col items-center gap-1 h-auto py-3 rounded-[10px]"
            >
              <Move className="h-4 w-4" />
              <span className="text-xs">Move</span>
            </Button>
          </div>

          {/* Control Buttons Row 2 */}
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant="outline"
              onClick={handleCapture}
              className="flex flex-col items-center gap-1 h-auto py-3 rounded-[10px]"
            >
              <Camera className="h-4 w-4" />
              <span className="text-xs">Capture</span>
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowDimensions(!showDimensions)}
              className="flex flex-col items-center gap-1 h-auto py-3 rounded-[10px]"
              style={{
                backgroundColor: showDimensions ? 'var(--primary-light)' : 'white',
                borderColor: showDimensions ? 'var(--primary)' : undefined
              }}
            >
              <RulerIcon className="h-4 w-4" />
              <span className="text-xs">Dimensions</span>
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="flex flex-col items-center gap-1 h-auto py-3 rounded-[10px]"
              style={{
                backgroundColor: showColorPicker ? 'var(--primary-light)' : 'white',
                borderColor: showColorPicker ? 'var(--primary)' : undefined
              }}
            >
              <Palette className="h-4 w-4" />
              <span className="text-xs">Color</span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col items-center gap-1 h-auto py-3 rounded-[10px]"
              style={{ borderColor: 'var(--destructive)', color: 'var(--destructive)' }}
            >
              <X className="h-4 w-4" />
              <span className="text-xs">Remove</span>
            </Button>
          </div>

          {/* Color Picker Strip */}
          {showColorPicker && (
            <div className="flex gap-2 p-3 rounded-lg" style={{ backgroundColor: 'var(--bg)' }}>
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className="w-10 h-10 rounded-full transition-all"
                  style={{
                    backgroundColor: colorMap[color],
                    border: selectedColor === color ? '3px solid var(--primary)' : '2px solid var(--border)',
                    boxShadow: selectedColor === color ? '0 0 0 2px white, 0 0 0 5px var(--primary)' : 'none'
                  }}
                  title={color}
                />
              ))}
            </div>
          )}

          {/* Inquiry Button */}
          <Button 
            className="w-full rounded-[10px] h-12"
            style={{ backgroundColor: 'var(--accent)', color: 'white' }}
            onClick={() => toast.success("Inquiry sent to store!")}
          >
            <ShoppingBag className="h-5 w-5 mr-2" />
            Send Inquiry
          </Button>
        </div>
      </div>

      {/* Screenshot Preview Modal */}
      <Dialog open={screenshotDialogOpen} onOpenChange={setScreenshotDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">AR Screenshot</h3>
            <div className="relative rounded-lg overflow-hidden">
              <ImageWithFallback
                src={getProductImage(product.image)}
                alt="AR Screenshot"
                className="w-full h-auto"
              />
              <div 
                className="absolute bottom-3 left-3 px-3 py-1 rounded text-sm backdrop-blur-md"
                style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white' }}
              >
                {product.name} - {product.store}
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={handleSaveImage}
                className="flex-1 rounded-[10px]"
                style={{ backgroundColor: 'var(--primary)', color: 'white' }}
              >
                💾 Save to Device
              </Button>
              <Button 
                variant="outline"
                className="flex-1 rounded-[10px]"
              >
                🔗 Share
              </Button>
            </div>
            <Button 
              variant="ghost"
              onClick={() => setScreenshotDialogOpen(false)}
              className="w-full rounded-[10px]"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
