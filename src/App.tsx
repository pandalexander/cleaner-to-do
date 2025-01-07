import "./App.css";
import { Link, Outlet } from "react-router-dom";
import myLogo from "./assets/logo-transparent.png";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header
          className="bg-coolerFour text-coolerOne"
          data-testid="header-menu"
        >
          <nav className="max-w-6xl mx-auto px-spacing-4">
            <div className="flex items-end justify-between space-x-spacing-6 py-spacing-3 ">
              <div className="max-w-spacing-10">
                <img src={myLogo} alt="" />
              </div>
              <div className="flex justify-between items-center gap-x-spacing-7">
                <Link to="home" className="text-lg text-coolerFive">
                  Home
                </Link>
                <Link to="about" className="text-lg text-coolerFive">
                  About
                </Link>
              </div>
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
