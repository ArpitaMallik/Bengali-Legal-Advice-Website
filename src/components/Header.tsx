import React from 'react';
import { Scale } from 'lucide-react';

interface HeaderProps {
  isAdmin: boolean;
  toggleAdminMode: () => void;
  onLogout?: () => void;
  showLogout?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAdmin, toggleAdminMode, onLogout, showLogout = false }) => {
  return (
    <header className="bg-indigo-900 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Scale className="h-8 w-8 text-amber-400" />
          <h1 className="text-2xl font-serif font-bold">LegalConsult AI</h1>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">
            {isAdmin ? "Admin Mode" : "User Mode"}
          </span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={isAdmin}
              onChange={toggleAdminMode}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
          </label>

          {showLogout && onLogout && (
            <button
              onClick={onLogout}
              className="text-sm px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
