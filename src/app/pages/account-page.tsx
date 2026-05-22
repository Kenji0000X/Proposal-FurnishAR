import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { BottomNav } from "../components/bottom-nav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { mockInquiries } from "../data/mock-data";
import { getProductImage } from "../utils/image-map";
import { User, Mail, Phone, Eye, LogOut } from "lucide-react";

export function AccountPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [arTips, setArTips] = useState(true);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogoutDialogOpen(false);
    navigate('/');
  };

  return (
    <div 
      className="min-h-screen pb-20 lg:pb-8"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-4xl mx-auto p-5 lg:p-12">
        {/* Header */}
        <h1 
          className="text-3xl lg:text-4xl mb-8"
          style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}
        >
          My Account
        </h1>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="w-full lg:w-auto grid grid-cols-3 mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="inquiries">My Inquiries</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div 
              className="rounded-2xl p-6 lg:p-8"
              style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                >
                  JD
                </div>
                <div>
                  <h2 className="text-xl font-medium">Juan dela Cruz</h2>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>juan.delacruz@example.com</p>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <Input 
                      id="full-name" 
                      defaultValue="Juan dela Cruz"
                      className="pl-10 rounded-[10px] h-11"
                      style={{ backgroundColor: 'var(--bg)' }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <Input 
                      id="email" 
                      type="email"
                      defaultValue="juan.delacruz@example.com"
                      className="pl-10 rounded-[10px] h-11"
                      style={{ backgroundColor: 'var(--bg)' }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <Input 
                      id="phone" 
                      defaultValue="+63 912 345 6789"
                      className="pl-10 rounded-[10px] h-11"
                      style={{ backgroundColor: 'var(--bg)' }}
                    />
                  </div>
                </div>

                <Button 
                  type="button"
                  className="w-full rounded-[10px] h-11"
                  style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                >
                  Save Changes
                </Button>
              </form>
            </div>
          </TabsContent>

          {/* My Inquiries Tab */}
          <TabsContent value="inquiries" className="space-y-4">
            {mockInquiries.map(inquiry => (
              <div 
                key={inquiry.id}
                className="rounded-2xl p-5 flex items-center gap-4"
                style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
              >
                <ImageWithFallback
                  src={getProductImage(inquiry.productImage)}
                  alt={inquiry.productName}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium mb-1">{inquiry.productName}</h3>
                  <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>{inquiry.store}</p>
                  <div className="flex items-center gap-3">
                    <Badge 
                      className="rounded-full px-2 py-1"
                      style={{
                        backgroundColor: 
                          inquiry.status === 'Responded' ? 'var(--success)' :
                          inquiry.status === 'Pending' ? 'var(--accent)' :
                          'var(--muted)',
                        color: 'white'
                      }}
                    >
                      {inquiry.status}
                    </Badge>
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {new Date(inquiry.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="rounded-[10px] flex-shrink-0"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Inquiry Details</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--bg)' }}>
                        <ImageWithFallback
                          src={getProductImage(inquiry.productImage)}
                          alt={inquiry.productName}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <p className="font-medium">{inquiry.productName}</p>
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{inquiry.store}</p>
                        </div>
                      </div>
                      <div>
                        <Label>Status</Label>
                        <Badge 
                          className="rounded-full px-3 py-1 mt-2"
                          style={{
                            backgroundColor: 
                              inquiry.status === 'Responded' ? 'var(--success)' :
                              inquiry.status === 'Pending' ? 'var(--accent)' :
                              'var(--muted)',
                            color: 'white'
                          }}
                        >
                          {inquiry.status}
                        </Badge>
                      </div>
                      <div>
                        <Label>Your Message</Label>
                        <p className="mt-2 p-3 rounded-lg" style={{ backgroundColor: 'var(--bg)' }}>
                          {inquiry.message}
                        </p>
                      </div>
                      {inquiry.status === 'Responded' && (
                        <div>
                          <Label>Store Response</Label>
                          <p className="mt-2 p-3 rounded-lg" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
                            Thank you for your interest! Yes, this item is available in the color you requested. Please visit our store or contact us at +63 912 XXX XXXX.
                          </p>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div 
              className="rounded-2xl p-6 lg:p-8 space-y-6"
              style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium mb-1">Email Notifications</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Receive updates about your inquiries and new furniture
                  </p>
                </div>
                <Switch 
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium mb-1">AR Tips</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Show helpful tips when using AR features
                  </p>
                </div>
                <Switch 
                  checked={arTips}
                  onCheckedChange={setArTips}
                />
              </div>

              <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline"
                      className="w-full rounded-[10px] h-11"
                      style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                    >
                      Change Password
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Change Password</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input 
                          id="current-password" 
                          type="password"
                          className="rounded-[10px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input 
                          id="new-password" 
                          type="password"
                          className="rounded-[10px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                        <Input 
                          id="confirm-new-password" 
                          type="password"
                          className="rounded-[10px]"
                        />
                      </div>
                      <Button 
                        className="w-full rounded-[10px]"
                        style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                      >
                        Update Password
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <Dialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline"
                      className="w-full rounded-[10px] h-11"
                      style={{ borderColor: 'var(--destructive)', color: 'var(--destructive)' }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Log Out
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Logout</DialogTitle>
                    </DialogHeader>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Are you sure you want to log out?
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
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav />
    </div>
  );
}
