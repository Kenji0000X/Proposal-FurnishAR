import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function StoreOwnerLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/store-owner/dashboard');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-5 py-12"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: 'var(--bg)' }}
    >
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl" style={{ boxShadow: '0 24px 48px rgba(0,0,0,0.2)' }}>
        {/* Left Side - Illustration */}
        <div 
          className="hidden lg:flex items-center justify-center p-12"
          style={{ 
            background: 'linear-gradient(135deg, var(--primary) 0%, #2d5a41 100%)'
          }}
        >
          <div className="text-center space-y-6 text-white">
            <div className="text-6xl">🏪</div>
            <h2 
              className="text-3xl"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Store Owner Portal
            </h2>
            <p className="text-white/90">
              Manage your inventory and reach more customers
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            {/* Logo */}
            <div className="text-center mb-8">
              <h1 
                className="text-3xl mb-2"
                style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--primary)' }}
              >
                FurnishAR
              </h1>
              <p 
                className="px-4 py-2 rounded-lg inline-block"
                style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}
              >
                Store Owner Portal
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="store-email">Store Email</Label>
                <Input 
                  id="store-email" 
                  type="email" 
                  placeholder="store@example.com"
                  className="rounded-[10px] h-11"
                  style={{ backgroundColor: 'var(--bg)' }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••"
                  className="rounded-[10px] h-11"
                  style={{ backgroundColor: 'var(--bg)' }}
                />
              </div>

              <Button 
                type="submit"
                className="w-full rounded-[10px] h-11"
                style={{ backgroundColor: 'var(--primary)', color: 'white' }}
              >
                Log In to Portal
              </Button>
            </form>

            {/* Contact */}
            <div className="mt-8 text-center">
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Need access?{' '}
                <a 
                  href="mailto:contact@furnishar.com" 
                  className="underline"
                  style={{ color: 'var(--primary)' }}
                >
                  Contact the FurnishAR team
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
