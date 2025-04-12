import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between p-4 shadow-md relative">
        <div className="text-2xl font-bold text-green-700">Greenlandia</div>
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10 flex flex-col items-start p-4 space-y-2 md:hidden">
            <a href="#" className="text-gray-800 hover:text-green-700">
              Sklep
            </a>
            <a href="#" className="text-gray-800 hover:text-green-700">
              O nas
            </a>
            <a href="#" className="text-gray-800 hover:text-green-700">
              Kontakt
            </a>
          </div>
        )}
      </nav>

      <main className="flex items-center justify-center h-[calc(100vh-64px)]">
        <h1 className="text-3xl font-semibold text-gray-700">
          Witamy w sklepie Greenlandia!
        </h1>
      </main>
    </div>
  );
}

export default App;
