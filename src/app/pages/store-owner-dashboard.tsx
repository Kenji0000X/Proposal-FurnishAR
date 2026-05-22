import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { mockProducts } from "../data/mock-data";
import { getProductImage } from "../utils/image-map";
import { 
  Home, 
  Package, 
  Plus, 
  BarChart3, 
  Store, 
  LogOut, 
  Eye, 
  Edit, 
  Trash2,
  Menu,
  MessageSquare
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { useState } from "react";

export function StoreOwnerDashboard() {
  const navigate = useNavigate();
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const stats = [
    { label: 'Total Products', value: '24', icon: Package },
    { label: 'AR Views This Month', value: '312', icon: Eye },
    { label: 'Shopper Inquiries', value: '18', icon: MessageSquare },
    { label: 'Items Low in Stock', value: '3', icon: Package },
  ];

  const recentProducts = mockProducts.slice(0, 5);

  const handleLogout = () => {
    navigate('/store-owner/login');
  };

  const Sidebar = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b" style={{ borderColor: 'var(--border)' }}>
        <h2 
          className="text-2xl"
          style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--primary)' }}
        >
          FurnishAR
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>Store Portal</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        <Link to="/store-owner/dashboard">
          <Button 
            variant="ghost" 
            className="w-full justify-start rounded-[10px]"
            style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}
          >
            <Home className="h-5 w-5 mr-3" />
            Dashboard
          </Button>
        </Link>
        <Link to="/store-owner/products">
          <Button 
            variant="ghost" 
            className="w-full justify-start rounded-[10px]"
          >
            <Package className="h-5 w-5 mr-3" />
            My Products
          </Button>
        </Link>
        <Link to="/store-owner/add-product">
          <Button 
            variant="ghost" 
            className="w-full justify-start rounded-[10px]"
          >
            <Plus className="h-5 w-5 mr-3" />
            Add Product
          </Button>
        </Link>
        <Button 
          variant="ghost" 
          className="w-full justify-start rounded-[10px]"
        >
          <BarChart3 className="h-5 w-5 mr-3" />
          Analytics
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-start rounded-[10px]"
        >
          <Store className="h-5 w-5 mr-3" />
          Store Profile
        </Button>
      </nav>

      <div className="p-4 border-t" style={{ borderColor: 'var(--border)' }}>
        <Button 
          variant="ghost" 
          className="w-full justify-start rounded-[10px]"
          style={{ color: 'var(--destructive)' }}
          onClick={() => setLogoutDialogOpen(true)}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Log Out
        </Button>
      </div>
    </div>
  );

  return (
    <div 
      className="min-h-screen"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: 'var(--bg)' }}
    >
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside 
          className="hidden lg:block w-64 fixed left-0 top-0 h-screen"
          style={{ backgroundColor: 'white', borderRight: '1px solid var(--border)' }}
        >
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          {/* Mobile Header */}
          <div 
            className="lg:hidden flex items-center justify-between p-4 border-b"
            style={{ backgroundColor: 'white', borderColor: 'var(--border)' }}
          >
            <h1 
              className="text-xl"
              style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--primary)' }}
            >
              Dashboard
            </h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <Sidebar />
              </SheetContent>
            </Sheet>
          </div>

          <div className="p-5 lg:p-12 space-y-8">
            {/* Welcome Header */}
            <div>
              <h1 
                className="text-3xl lg:text-4xl mb-2"
                style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}
              >
                Welcome back, Mamburao Home Furniture
              </h1>
              <p style={{ color: 'var(--text-secondary)' }}>
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={idx}
                    className="rounded-2xl p-6"
                    style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'var(--primary-light)' }}
                      >
                        <Icon className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                      </div>
                    </div>
                    <p className="text-3xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div 
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
            >
              <h2 className="text-xl font-medium mb-4">Quick Actions</h2>
              <div className="grid sm:grid-cols-3 gap-3">
                <Link to="/store-owner/add-product">
                  <Button 
                    className="w-full rounded-[10px] h-12"
                    style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Add New Product
                  </Button>
                </Link>
                <Button 
                  variant="outline"
                  className="w-full rounded-[10px] h-12"
                >
                  View All Inquiries
                </Button>
                <Button 
                  variant="outline"
                  className="w-full rounded-[10px] h-12"
                >
                  Update Store Info
                </Button>
              </div>
            </div>

            {/* Recent Products */}
            <div 
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">Recent Products</h2>
                <Link to="/store-owner/products">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    style={{ color: 'var(--primary)' }}
                  >
                    View All
                  </Button>
                </Link>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                      <th className="text-left py-3 px-2 text-sm" style={{ color: 'var(--text-secondary)' }}>Product</th>
                      <th className="text-left py-3 px-2 text-sm" style={{ color: 'var(--text-secondary)' }}>Price</th>
                      <th className="text-left py-3 px-2 text-sm" style={{ color: 'var(--text-secondary)' }}>Stock</th>
                      <th className="text-left py-3 px-2 text-sm" style={{ color: 'var(--text-secondary)' }}>Status</th>
                      <th className="text-right py-3 px-2 text-sm" style={{ color: 'var(--text-secondary)' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentProducts.map(product => (
                      <tr key={product.id} className="border-b" style={{ borderColor: 'var(--border)' }}>
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-3">
                            <ImageWithFallback
                              src={getProductImage(product.image)}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                            <span className="font-medium">{product.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-2">₱{product.price.toLocaleString()}</td>
                        <td className="py-3 px-2">
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
                        <td className="py-3 px-2">
                          <Badge 
                            className="rounded-full px-2 py-1"
                            style={{ backgroundColor: 'var(--success)', color: 'white' }}
                          >
                            Published
                          </Badge>
                        </td>
                        <td className="py-3 px-2">
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
            </div>
          </div>
        </main>
      </div>

      {/* Logout Confirmation Dialog */}
      <Dialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Logout</DialogTitle>
          </DialogHeader>
          <p style={{ color: 'var(--text-secondary)' }}>
            Are you sure you want to log out of the store portal?
          </p>
          <div className="flex gap-2 mt-4">
            <Button 
              onClick={handleLogout}
              className="flex-1 rounded-[10px]"
              style={{ backgroundColor: 'var(--destructive)', color: 'white' }}
            >
              Yes, Log Out
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setLogoutDialogOpen(false)}
              className="flex-1 rounded-[10px]"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
