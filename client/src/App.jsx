import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <nav className="flex items-center justify-between p-4 shadow-md relative">
          <div className="text-2xl font-bold text-green-500">Greenlandia</div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-white hover:text-green-500">
              Sklep
            </a>
            <a href="/about" className="text-white hover:text-green-500">
              O nas
            </a>
            <a href="/contact" className="text-white hover:text-green-500">
              Kontakt
            </a>
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
            </div>
          )}
        </nav>

        <main className="flex items-center justify-center h-[calc(100vh-64px)]">
          <h1 className="text-3xl font-semibold text-white">
            Witamy w sklepie Greenlandia!
          </h1>
        </main>

        <Switch>
          <Route path="/" exact>
            <h1 className="text-3xl text-white">Sklep</h1>
          </Route>
          <Route path="/about">
            <h1 className="text-3xl text-white">O nas</h1>
          </Route>
          <Route path="/contact">
            <h1 className="text-3xl text-white">Kontakt</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
