import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { mockProducts } from "../data/mock-data";
import { getProductImage } from "../utils/image-map";
import { ArrowLeft, Plus, Search, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

export function MyProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [products, setProducts] = useState(mockProducts);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || 
      (statusFilter === "published" && product.stock !== 'Out of Stock') ||
      (statusFilter === "draft") ||
      (statusFilter === "out-of-stock" && product.stock === 'Out of Stock');
    return matchesSearch && matchesStatus;
  });

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProducts(filteredProducts.map(p => p.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedProducts([...selectedProducts, id]);
    } else {
      setSelectedProducts(selectedProducts.filter(pid => pid !== id));
    }
  };

  const handleDeleteSelected = () => {
    setProducts(products.filter(p => !selectedProducts.includes(p.id)));
    setSelectedProducts([]);
    toast.success(`${selectedProducts.length} product(s) deleted`);
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    toast.success("Product deleted");
  };

  return (
    <div 
      className="min-h-screen pb-8"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto p-5 lg:p-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
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
              My Products
            </h1>
          </div>
          <Link to="/store-owner/add-product">
            <Button 
              className="rounded-[10px]"
              style={{ backgroundColor: 'var(--primary)', color: 'white' }}
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Product
            </Button>
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5" style={{ color: 'var(--text-secondary)' }} />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-[10px] h-11"
              style={{ backgroundColor: 'white' }}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[200px] rounded-[10px] h-11" style={{ backgroundColor: 'white' }}>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="out-of-stock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bulk Actions Bar */}
        {selectedProducts.length > 0 && (
          <div 
            className="flex items-center gap-3 p-4 rounded-xl mb-6"
            style={{ backgroundColor: 'var(--primary-light)' }}
          >
            <span style={{ color: 'var(--primary)' }}>
              {selectedProducts.length} selected
            </span>
            <Button 
              variant="ghost"
              size="sm"
              onClick={handleDeleteSelected}
              style={{ color: 'var(--destructive)' }}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Selected
            </Button>
            <Button 
              variant="ghost"
              size="sm"
              style={{ color: 'var(--primary)' }}
            >
              Set as Draft
            </Button>
            <Button 
              variant="ghost"
              size="sm"
              style={{ color: 'var(--primary)' }}
            >
              Publish Selected
            </Button>
          </div>
        )}

        {/* Products Table - Desktop */}
        <div 
          className="hidden lg:block rounded-2xl overflow-hidden"
          style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
        >
          <table className="w-full">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}>
                <th className="text-left py-4 px-4">
                  <Checkbox 
                    checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium">Image</th>
                <th className="text-left py-4 px-4 text-sm font-medium">Product Name</th>
                <th className="text-left py-4 px-4 text-sm font-medium">Category</th>
                <th className="text-left py-4 px-4 text-sm font-medium">Price</th>
                <th className="text-left py-4 px-4 text-sm font-medium">Colors</th>
                <th className="text-left py-4 px-4 text-sm font-medium">Stock</th>
                <th className="text-left py-4 px-4 text-sm font-medium">Status</th>
                <th className="text-right py-4 px-4 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => (
                <tr key={product.id} className="border-b" style={{ borderColor: 'var(--border)' }}>
                  <td className="py-4 px-4">
                    <Checkbox 
                      checked={selectedProducts.includes(product.id)}
                      onCheckedChange={(checked) => handleSelectProduct(product.id, checked as boolean)}
                    />
                  </td>
                  <td className="py-4 px-4">
                    <ImageWithFallback
                      src={getProductImage(product.image)}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="py-4 px-4 font-medium">{product.name}</td>
                  <td className="py-4 px-4">{product.category}</td>
                  <td className="py-4 px-4">₱{product.price.toLocaleString()}</td>
                  <td className="py-4 px-4">
                    <div className="flex gap-1">
                      {product.colors.slice(0, 3).map(color => (
                        <div
                          key={color}
                          className="w-5 h-5 rounded-full border"
                          style={{ 
                            backgroundColor: color === 'Brown' ? '#8B4513' :
                                           color === 'Black' ? '#000000' :
                                           color === 'White' ? '#FFFFFF' :
                                           color === 'Natural' ? '#D2B48C' :
                                           color === 'Gray' ? '#808080' : '#F5F5DC',
                            borderColor: 'var(--border)'
                          }}
                          title={color}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge 
                      className="rounded-full px-2 py-1"
                      style={{
                        backgroundColor: product.stock === 'In Stock' ? 'var(--success)' : 
                                       product.stock === 'Limited' ? 'var(--accent)' : 'var(--destructive)',
                        color: 'white'
                      }}
                    >
                      {product.stock}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <Badge 
                      className="rounded-full px-2 py-1"
                      style={{ backgroundColor: 'var(--success)', color: 'white' }}
                    >
                      Published
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="rounded-lg"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDelete(product.id)}
                        className="rounded-lg"
                        style={{ color: 'var(--destructive)' }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Products Cards - Mobile */}
        <div className="lg:hidden space-y-4">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="rounded-2xl p-4 flex gap-4"
              style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
            >
              <Checkbox 
                checked={selectedProducts.includes(product.id)}
                onCheckedChange={(checked) => handleSelectProduct(product.id, checked as boolean)}
              />
              <ImageWithFallback
                src={getProductImage(product.image)}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium mb-1">{product.name}</h3>
                <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                  {product.category} • ₱{product.price.toLocaleString()}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge 
                    className="rounded-full px-2 py-1 text-xs"
                    style={{
                      backgroundColor: product.stock === 'In Stock' ? 'var(--success)' : 
                                     product.stock === 'Limited' ? 'var(--accent)' : 'var(--destructive)',
                      color: 'white'
                    }}
                  >
                    {product.stock}
                  </Badge>
                  <Badge 
                    className="rounded-full px-2 py-1 text-xs"
                    style={{ backgroundColor: 'var(--success)', color: 'white' }}
                  >
                    Published
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="rounded-lg"
                  >
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDelete(product.id)}
                    className="rounded-lg"
                    style={{ borderColor: 'var(--destructive)', color: 'var(--destructive)' }}
                  >
                    <Trash2 className="h-3 w-3 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button variant="outline" className="rounded-lg">Previous</Button>
          <Button className="rounded-lg w-10 h-10 p-0" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>1</Button>
          <Button variant="outline" className="rounded-lg w-10 h-10 p-0">2</Button>
          <Button variant="outline" className="rounded-lg w-10 h-10 p-0">3</Button>
          <Button variant="outline" className="rounded-lg">Next</Button>
        </div>
      </div>
    </div>
  );
}
