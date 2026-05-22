import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ArrowRight, Camera, Ruler, Search } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getProductImage } from "../utils/image-map";

export function LandingPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-5 lg:px-12 py-20" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 
                className="text-4xl lg:text-6xl leading-tight"
                style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}
              >
                See It In Your Home Before You Buy It
              </h1>
              <p className="text-lg lg:text-xl" style={{ color: 'var(--text-secondary)' }}>
                Browse local Mamburao furniture stores, scan your room, and place 3D furniture models in your space — all from your browser.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/catalog">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto rounded-[10px] text-base h-12 px-8"
                    style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                  >
                    Explore Furniture <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/store-owner/login">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto rounded-[10px] text-base h-12 px-8"
                    style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                  >
                    I'm a Store Owner
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src={getProductImage('ar-hero')}
                  alt="AR furniture placement demonstration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-5 lg:px-12" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Link to="/ar-viewer/1" className="block group">
              <div 
                className="rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'var(--primary-light)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <h3 
                  className="text-2xl mb-4"
                  style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}
                >
                  AR Furniture Placement
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  See furniture in your actual space using augmented reality. No app download required.
                </p>
              </div>
            </Link>

            {/* Feature 2 */}
            <Link to="/room-scanner" className="block group">
              <div 
                className="rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'var(--accent-light)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  <Ruler className="h-8 w-8 text-white" />
                </div>
                <h3 
                  className="text-2xl mb-4"
                  style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}
                >
                  Room Scanner
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Measure your room dimensions by tapping two points on your floor.
                </p>
              </div>
            </Link>

            {/* Feature 3 */}
            <Link to="/catalog" className="block group">
              <div 
                className="rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'var(--primary-light)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 
                  className="text-2xl mb-4"
                  style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--text-primary)' }}
                >
                  Smart Catalog
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Browse and filter furniture from local Mamburao stores all in one place.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-5 lg:px-12" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 
            className="text-3xl mb-2"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            FurnishAR
          </h2>
          <p className="text-white/80">
            Designed for Mamburao, Occidental Mindoro
          </p>
          <p className="text-white/60 text-sm mt-4">
            © 2026 FurnishAR. Empowering local furniture retailers.
          </p>
        </div>
      </footer>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4" style={{ backgroundColor: 'white', boxShadow: '0 -2px 12px rgba(0,0,0,0.08)' }}>
        <Link to="/catalog" className="block">
          <Button 
            size="lg" 
            className="w-full rounded-[10px]"
            style={{ backgroundColor: 'var(--primary)', color: 'white' }}
          >
            Explore Furniture
          </Button>
        </Link>
      </div>
    </div>
  );
}
