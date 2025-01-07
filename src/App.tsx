import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header
          className="bg-white shadow-sm border-b"
          data-testid="header-menu"
        >
          <nav className="max-w-6xl mx-auto px-spacing-4">
            <div className="flex items-center justify-center space-x-spacing-6 py-spacing-3">
              <Link
                to="home"
                className="text-delft-blue hover:text-orange-web transition-colors duration-200 font-medium"
              >
                Home
              </Link>
            </div>
          </nav>
        </header>

        <div className="flex flex-col flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
