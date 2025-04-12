import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between p-4 shadow-md relative">
        <div className="text-2xl font-bold text-green-500">Greenlandia</div>
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

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black shadow-md z-10 flex flex-col items-start p-4 space-y-2 md:hidden">
            <a href="#" className="text-white hover:text-green-500">
              Sklep
            </a>
            <a href="#" className="text-white hover:text-green-500">
              O nas
            </a>
            <a href="#" className="text-white hover:text-green-500">
              Kontakt
            </a>
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
