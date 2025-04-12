import React, { useState } from "react";
import { Menu, X, Search, User, ShoppingCart } from "react-feather"; // Import ikon
import "./index.css"; // Importujemy plik CSS

function App() {
  const [menuOpen, setMenuOpen] = useState(false); // Stan do kontrolowania otwarcia menu

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between p-4 shadow-md relative">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-500">Greenlandia</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="/" className="text-white hover:text-green-500">
            Sklep
          </a>
          <a href="/about" className="text-white hover:text-green-500">
            O nas
          </a>
          <a href="/contact" className="text-white hover:text-green-500">
            Kontakt
          </a>

          {/* Ikony na desktopie */}
          <Search className="w-6 h-6 text-white cursor-pointer hover:text-green-500" />
          <User className="w-6 h-6 text-white cursor-pointer hover:text-green-500" />
          <ShoppingCart className="w-6 h-6 text-white cursor-pointer hover:text-green-500" />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black shadow-md z-10 flex flex-col items-start p-4 space-y-2 md:hidden">
            <a href="/" className="text-white hover:text-green-500">
              Sklep
            </a>
            <a href="/about" className="text-white hover:text-green-500">
              O nas
            </a>
            <a href="/contact" className="text-white hover:text-green-500">
              Kontakt
            </a>

            {/* Mobile Icons */}
            <div className="flex space-x-4 mt-4">
              <Search className="w-6 h-6 text-white cursor-pointer hover:text-green-500" />
              <User className="w-6 h-6 text-white cursor-pointer hover:text-green-500" />
              <ShoppingCart className="w-6 h-6 text-white cursor-pointer hover:text-green-500" />
            </div>
          </div>
        )}
      </nav>

      <main className="flex items-center justify-center h-[calc(100vh-64px)]">
        <h1 className="text-3xl font-semibold text-white">
          Witamy w sklepie Greenlandia!
        </h1>
      </main>
    </div>
  );
}

export default App;
