import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";

export function ShopperLogin() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/catalog');
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
            background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--accent-light) 100%)'
          }}
        >
          <div className="text-center space-y-6">
            <div className="text-6xl">🪑</div>
            <h2 
              className="text-3xl"
              style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--primary)' }}
            >
              Welcome to FurnishAR
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Your journey to the perfect furniture starts here
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
              <p style={{ color: 'var(--text-secondary)' }}>
                {isSignUp ? 'Create your account' : 'Welcome back'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Juan dela Cruz"
                    className="rounded-[10px] h-11"
                    style={{ backgroundColor: 'var(--bg)' }}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@example.com"
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

              {isSignUp && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input 
                      id="confirm-password" 
                      type="password" 
                      placeholder="••••••••"
                      className="rounded-[10px] h-11"
                      style={{ backgroundColor: 'var(--bg)' }}
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      I agree to the terms and conditions
                    </label>
                  </div>
                </>
              )}

              <Button 
                type="submit"
                className="w-full rounded-[10px] h-11"
                style={{ backgroundColor: 'var(--primary)', color: 'white' }}
              >
                {isSignUp ? 'Create Account' : 'Log In'}
              </Button>
            </form>

            {/* Toggle Sign Up/Login */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm"
                style={{ color: 'var(--primary)' }}
              >
                {isSignUp ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" style={{ borderColor: 'var(--border)' }}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white" style={{ color: 'var(--text-secondary)' }}>or</span>
              </div>
            </div>

            {/* Continue as Guest */}
            <Link to="/catalog">
              <Button 
                variant="outline" 
                className="w-full rounded-[10px] h-11"
                style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
              >
                Continue as Guest
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
