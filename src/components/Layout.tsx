import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: '~/home' },
  { to: '/about', label: '~/about' },
  { to: '/projects', label: '~/projects' },
  { to: '/skills', label: '~/skills' },
  { to: '/blog', label: '~/blog' },
  { to: '/contact', label: '~/contact' },
];

const Layout: React.FC = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-black text-terminal-green font-mono">
      <nav className="flex space-x-4 px-6 py-4 border-b border-terminal-green/30 bg-black/80 backdrop-blur">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`relative px-3 py-1 transition-colors duration-200 ${location.pathname === link.to ? 'underline underline-offset-4 decoration-terminal-green' : 'hover:text-accent-green'}`}
          >
            {link.label}
            {location.pathname === link.to && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-terminal-green animate-pulse rounded"></span>
            )}
          </Link>
        ))}
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
