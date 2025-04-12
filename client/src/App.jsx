import React from "react";
import { Menu } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="flex items-center justify-between p-4 shadow-md">
        <div className="text-2xl font-bold text-green-700">Greenlandia</div>
        <button className="md:hidden p-2">
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
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
