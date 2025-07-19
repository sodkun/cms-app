// components/layout/Sidebar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // pastikan sudah install lucide-react

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar untuk layar besar */}
      <aside className="hidden md:flex flex-col w-64 bg-gray-100 h-full p-4">
        <Link to="/home" className="mb-2">Dashboard</Link>
        <Link to="/settings">Settings</Link>
      </aside>

      {/* Sidebar responsif (drawer) untuk layar kecil */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 focus:outline-none"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        {isOpen && (
          <div className="absolute z-50 top-0 left-0 w-64 h-screen bg-gray-100 shadow-lg p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="mb-4 focus:outline-none"
            >
              <X />
            </button>
            <div className="flex flex-col space-y-4">
              <Link to="/home" onClick={() => setIsOpen(false)}>Dashboard</Link>
              <Link to="/settings" onClick={() => setIsOpen(false)}>Settings</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
