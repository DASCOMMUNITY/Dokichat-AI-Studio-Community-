import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CONFIG } from "../config";

const NAV_ITEMS = [
  { path: "/gioi-thieu", label: "Giới thiệu" },
  { path: "/quy-dinh", label: "Quy định" },
  { path: "/huong-dan", label: "Hướng dẫn" },
  { path: "/faq", label: "FAQ" },
  { path: "/lien-he", label: "Liên hệ" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-bold tracking-widest text-primary text-sm uppercase">
          {CONFIG.GROUP_SHORT_NAME}
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `hover:text-primary ${isActive ? "text-primary" : "text-text-muted"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-text hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-border/50 bg-background px-6 py-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `block py-3 px-2 text-lg font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isActive ? "text-primary bg-primary-light/50" : "text-text-muted active:bg-border/50"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
