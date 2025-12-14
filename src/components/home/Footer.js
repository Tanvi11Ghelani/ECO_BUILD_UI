import React from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';
const Footer = () => {
  return <footer className="border-t py-6">
      <div className="container flex flex-col gap-2 items-center justify-between text-sm text-muted-foreground md:flex-row">
        <p>© 2025 מדריך התקנה לקבלני אקובילד. כל הזכויות שמורות.</p>
        <div className="flex gap-4">
          <Link to="/about" className="hover:underline">אודות</Link>
          <Link to="/contact" className="hover:underline">צור קשר</Link>
          <Link to="/settings" className="hover:underline flex items-center gap-1">
            <Settings className="h-3.5 w-3.5" />
            הגדרות
          </Link>
        </div>
      </div>
    </footer>;
};
export default Footer;