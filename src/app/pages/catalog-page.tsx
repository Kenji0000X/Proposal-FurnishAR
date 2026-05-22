import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { Slider } from "../components/ui/slider";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { BottomNav } from "../components/bottom-nav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { mockProducts, mockStores } from "../data/mock-data";
import { getProductImage } from "../utils/image-map";
import { Search, SlidersHorizontal, Camera, Eye, Grid, List } from "lucide-react";

export function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedStores, setSelectedStores] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['Sofa', 'Bed', 'Dining Table', 'Cabinet', 'Chair', 'Shelf'];
  const colors = ['Brown', 'Black', 'White', 'Natural', 'Gray', 'Beige'];
  const styles = ['Modern', 'Classic', 'Rustic', 'Minimalist'];
  const sizes = ['Small', 'Medium', 'Large'];

  const colorMap: Record<string, string> = {
    'Brown': '#8B4513',
    'Black': '#000000',
    'White': '#FFFFFF',
    'Natural': '#D2B48C',
    'Gray': '#808080',
    'Beige': '#F5F5DC',
  };

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.store.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesColor = selectedColors.length === 0 || product.colors.some(c => selectedColors.includes(c));
    const matchesSize = !selectedSize || product.size === selectedSize;
    const matchesStyle = selectedStyles.length === 0 || selectedStyles.includes(product.style);
    const matchesStore = selectedStores.length === 0 || selectedStores.includes(product.store);

    return matchesSearch && matchesPrice && matchesCategory && matchesColor && matchesSize && matchesStyle && matchesStore;
  });

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Category */}
      <div className="space-y-3">
        <h3 className="font-medium">Category</h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <div key={cat} className="flex items-center gap-2">
              <Checkbox 
                id={`cat-${cat}`}
                checked={selectedCategories.includes(cat)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedCategories([...selectedCategories, cat]);
                  } else {
                    setSelectedCategories(selectedCategories.filter(c => c !== cat));
                  }
                }}
              />
              <label htmlFor={`cat-${cat}`} className="text-sm cursor-pointer">{cat}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <h3 className="font-medium">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={50000}
          step={1000}
          className="mt-2"
        />
        <div className="flex justify-between text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span>₱{priceRange[0].toLocaleString()}</span>
          <span>₱{priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      {/* Color */}
      <div className="space-y-3">
        <h3 className="font-medium">Color</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => {
                if (selectedColors.includes(color)) {
                  setSelectedColors(selectedColors.filter(c => c !== color));
                } else {
                  setSelectedColors([...selectedColors, color]);
                }
              }}
              className="w-10 h-10 rounded-full transition-all"
              style={{
                backgroundColor: colorMap[color],
                border: selectedColors.includes(color) ? '3px solid var(--primary)' : '2px solid var(--border)',
                boxShadow: selectedColors.includes(color) ? '0 0 0 2px white, 0 0 0 5px var(--primary)' : 'none'
              }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="space-y-3">
        <h3 className="font-medium">Size</h3>
        <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
          {sizes.map(size => (
            <div key={size} className="flex items-center gap-2">
              <RadioGroupItem value={size} id={`size-${size}`} />
              <label htmlFor={`size-${size}`} className="text-sm cursor-pointer">{size}</label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Style */}
      <div className="space-y-3">
        <h3 className="font-medium">Style</h3>
        <div className="space-y-2">
          {styles.map(style => (
            <div key={style} className="flex items-center gap-2">
              <Checkbox 
                id={`style-${style}`}
                checked={selectedStyles.includes(style)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedStyles([...selectedStyles, style]);
                  } else {
                    setSelectedStyles(selectedStyles.filter(s => s !== style));
                  }
                }}
              />
              <label htmlFor={`style-${style}`} className="text-sm cursor-pointer">{style}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Store */}
      <div className="space-y-3">
        <h3 className="font-medium">Store</h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {mockStores.map(store => (
            <div key={store} className="flex items-center gap-2">
              <Checkbox 
                id={`store-${store}`}
                checked={selectedStores.includes(store)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedStores([...selectedStores, store]);
                  } else {
                    setSelectedStores(selectedStores.filter(s => s !== store));
                  }
                }}
              />
              <label htmlFor={`store-${store}`} className="text-sm cursor-pointer">{store}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <Button 
          className="flex-1 rounded-[10px]"
          style={{ backgroundColor: 'var(--primary)', color: 'white' }}
        >
          Apply Filters
        </Button>
        <Button 
          variant="outline" 
          className="rounded-[10px]"
          onClick={() => {
            setSelectedCategories([]);
            setSelectedColors([]);
            setSelectedSize("");
            setSelectedStyles([]);
            setSelectedStores([]);
            setPriceRange([0, 50000]);
          }}
        >
          Clear All
        </Button>
      </div>
    </div>
  );

  return (
    <div 
      className="min-h-screen pb-20 lg:pb-0"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block p-6 rounded-2xl h-fit sticky top-6" style={{ backgroundColor: 'white' }}>
            <FilterPanel />
          </aside>

          {/* Main Content */}
          <main className="p-5 lg:p-6 space-y-6">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5" style={{ color: 'var(--text-secondary)' }} />
                <Input
                  placeholder="Search furniture..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-[10px] h-11"
                  style={{ backgroundColor: 'white' }}
                />
              </div>
              
              <div className="flex gap-2">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden rounded-[10px]">
                      <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterPanel />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px] rounded-[10px] h-11" style={{ backgroundColor: 'white' }}>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode Toggle */}
                <div className="hidden sm:flex gap-1 p-1 rounded-[10px]" style={{ backgroundColor: 'white' }}>
                  <button
                    onClick={() => setViewMode('grid')}
                    className="p-2 rounded-lg transition-colors"
                    style={{ backgroundColor: viewMode === 'grid' ? 'var(--primary-light)' : 'transparent', color: viewMode === 'grid' ? 'var(--primary)' : 'var(--text-secondary)' }}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className="p-2 rounded-lg transition-colors"
                    style={{ backgroundColor: viewMode === 'list' ? 'var(--primary-light)' : 'transparent', color: viewMode === 'list' ? 'var(--primary)' : 'var(--text-secondary)' }}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredProducts.map(product => (
                <div 
                  key={product.id}
                  className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ 
                    backgroundColor: 'white',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                  }}
                >
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
          </main>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
