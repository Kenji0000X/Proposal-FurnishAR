import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Checkbox } from "../components/ui/checkbox";
import { ArrowLeft, Upload, X } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export function AddProductPage() {
  const navigate = useNavigate();
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [modelUploaded, setModelUploaded] = useState(false);

  const colors = ['Brown', 'Black', 'White', 'Natural', 'Gray', 'Beige'];
  const colorMap: Record<string, string> = {
    'Brown': '#8B4513',
    'Black': '#000000',
    'White': '#FFFFFF',
    'Natural': '#D2B48C',
    'Gray': '#808080',
    'Beige': '#F5F5DC',
  };

  const handlePublish = () => {
    toast.success("Product published successfully!");
    navigate('/store-owner/products');
  };

  const handleSaveDraft = () => {
    toast.success("Product saved as draft");
    navigate('/store-owner/products');
  };

  const handleImageUpload = () => {
    // Simulate image upload
    if (uploadedImages.length < 5) {
      setUploadedImages([...uploadedImages, `image-${uploadedImages.length + 1}`]);
    }
  };

  return (
    <div 
      className="min-h-screen pb-8"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto p-5 lg:p-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/store-owner/dashboard">
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 
            className="text-3xl lg:text-4xl"
            style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}
          >
            Add New Product
          </h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Left Column - Form */}
          <div 
            className="rounded-2xl p-6 lg:p-8 space-y-6"
            style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
          >
            <div className="space-y-2">
              <Label htmlFor="product-name">Product Name *</Label>
              <Input 
                id="product-name" 
                placeholder="e.g., Modern Fabric Sofa"
                className="rounded-[10px] h-11"
                style={{ backgroundColor: 'var(--bg)' }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select>
                <SelectTrigger className="rounded-[10px] h-11" style={{ backgroundColor: 'var(--bg)' }}>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sofa">Sofa</SelectItem>
                  <SelectItem value="bed">Bed</SelectItem>
                  <SelectItem value="dining-table">Dining Table</SelectItem>
                  <SelectItem value="cabinet">Cabinet</SelectItem>
                  <SelectItem value="chair">Chair</SelectItem>
                  <SelectItem value="shelf">Shelf</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea 
                id="description" 
                placeholder="Describe the furniture piece..."
                rows={4}
                className="rounded-[10px]"
                style={{ backgroundColor: 'var(--bg)' }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price (₱) *</Label>
              <Input 
                id="price" 
                type="number"
                placeholder="0"
                className="rounded-[10px] h-11"
                style={{ backgroundColor: 'var(--bg)' }}
              />
            </div>

            <div className="space-y-2">
              <Label>Available Colors *</Label>
              <div className="flex flex-wrap gap-3">
                {colors.map(color => (
                  <div key={color} className="flex items-center gap-2">
                    <Checkbox 
                      id={`color-${color}`}
                      checked={selectedColors.includes(color)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedColors([...selectedColors, color]);
                        } else {
                          setSelectedColors(selectedColors.filter(c => c !== color));
                        }
                      }}
                    />
                    <label 
                      htmlFor={`color-${color}`}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <div 
                        className="w-6 h-6 rounded-full border-2"
                        style={{ backgroundColor: colorMap[color], borderColor: 'var(--border)' }}
                      />
                      <span className="text-sm">{color}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Dimensions (cm) *</Label>
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1">
                  <Input 
                    placeholder="Width"
                    type="number"
                    className="rounded-[10px] h-11"
                    style={{ backgroundColor: 'var(--bg)' }}
                  />
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Width</p>
                </div>
                <div className="space-y-1">
                  <Input 
                    placeholder="Depth"
                    type="number"
                    className="rounded-[10px] h-11"
                    style={{ backgroundColor: 'var(--bg)' }}
                  />
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Depth</p>
                </div>
                <div className="space-y-1">
                  <Input 
                    placeholder="Height"
                    type="number"
                    className="rounded-[10px] h-11"
                    style={{ backgroundColor: 'var(--bg)' }}
                  />
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Height</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Stock Status *</Label>
              <RadioGroup defaultValue="in-stock">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="in-stock" id="in-stock" />
                  <label htmlFor="in-stock" className="cursor-pointer">In Stock</label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="limited" id="limited" />
                  <label htmlFor="limited" className="cursor-pointer">Limited</label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="out-of-stock" id="out-of-stock" />
                  <label htmlFor="out-of-stock" className="cursor-pointer">Out of Stock</label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="style">Style *</Label>
              <Select>
                <SelectTrigger className="rounded-[10px] h-11" style={{ backgroundColor: 'var(--bg)' }}>
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="classic">Classic</SelectItem>
                  <SelectItem value="rustic">Rustic</SelectItem>
                  <SelectItem value="minimalist">Minimalist</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Size Category *</Label>
              <RadioGroup defaultValue="medium">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="small" id="small" />
                  <label htmlFor="small" className="cursor-pointer">Small</label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <label htmlFor="medium" className="cursor-pointer">Medium</label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="large" id="large" />
                  <label htmlFor="large" className="cursor-pointer">Large</label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Right Column - Media Upload */}
          <div className="space-y-6">
            {/* 3D Model Upload */}
            <div 
              className="rounded-2xl p-6 space-y-4"
              style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
            >
              <Label>3D Model Upload</Label>
              <div 
                className="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors hover:border-primary"
                style={{ borderColor: modelUploaded ? 'var(--primary)' : 'var(--border)' }}
                onClick={() => setModelUploaded(true)}
              >
                <Upload className="h-12 w-12 mx-auto mb-3" style={{ color: 'var(--text-secondary)' }} />
                <p className="font-medium mb-1">
                  {modelUploaded ? '✓ model.glb uploaded' : 'Upload 3D Model'}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  .glb or .gltf format
                </p>
              </div>
            </div>

            {/* Product Images Upload */}
            <div 
              className="rounded-2xl p-6 space-y-4"
              style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
            >
              <Label>Product Images (max 5)</Label>
              <div 
                className="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors hover:border-primary"
                style={{ borderColor: 'var(--border)' }}
                onClick={handleImageUpload}
              >
                <Upload className="h-12 w-12 mx-auto mb-3" style={{ color: 'var(--text-secondary)' }} />
                <p className="font-medium mb-1">Upload Images</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  4:3 ratio recommended
                </p>
              </div>

              {/* Image Previews */}
              {uploadedImages.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {uploadedImages.map((img, idx) => (
                    <div 
                      key={idx}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden"
                      style={{ backgroundColor: 'var(--bg)' }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                          Image {idx + 1}
                        </span>
                      </div>
                      <button
                        onClick={() => setUploadedImages(uploadedImages.filter((_, i) => i !== idx))}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white' }}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sticky Bottom Bar */}
        <div 
          className="fixed bottom-0 left-0 right-0 p-4 lg:p-6 flex gap-3 justify-end"
          style={{ backgroundColor: 'white', boxShadow: '0 -2px 12px rgba(0,0,0,0.08)' }}
        >
          <div className="max-w-6xl w-full mx-auto flex gap-3 justify-end">
            <Link to="/store-owner/products">
              <Button 
                variant="ghost"
                className="rounded-[10px]"
              >
                Cancel
              </Button>
            </Link>
            <Button 
              variant="outline"
              onClick={handleSaveDraft}
              className="rounded-[10px]"
            >
              Save as Draft
            </Button>
            <Button 
              onClick={handlePublish}
              className="rounded-[10px]"
              style={{ backgroundColor: 'var(--primary)', color: 'white' }}
            >
              Publish Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
