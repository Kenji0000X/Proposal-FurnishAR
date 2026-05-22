import { Link, useLocation } from "react-router";
import { Home, Search, Ruler, Heart, User } from "lucide-react";

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Catalog', path: '/catalog' },
    { icon: Ruler, label: 'Scan', path: '/room-scanner' },
    { icon: Heart, label: 'Saved', path: '/saved' },
    { icon: User, label: 'Account', path: '/account' },
  ];

  return (
    <nav 
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 h-16 flex items-center justify-around px-2"
      style={{ 
        backgroundColor: 'white',
        boxShadow: '0 -2px 12px rgba(0,0,0,0.08)'
      }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors"
            style={{
              color: isActive ? 'var(--primary)' : 'var(--text-secondary)'
            }}
          >
            <Icon className="h-5 w-5" />
            <span className="text-xs">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
