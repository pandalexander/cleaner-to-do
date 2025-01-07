import "./App.css";
import { Link, Outlet } from "react-router-dom";
import myLogo from "./assets/logo-transparent.png";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header
          className="bg-coolerOne text-coolerTwo"
          data-testid="header-menu"
        >
          <nav className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between space-x-spacing-6 py-spacing-3  ">
              <div className="max-w-spacing-11">
                <Link to="home">
                  <img src={myLogo} alt="" />
                </Link>
              </div>
              <div className="flex justify-between items-center gap-x-spacing-7">
                <Link to="about" className="text-lg text-coolerFive">
                  Services and prices
                </Link>
                <Link to="about" className="text-lg text-coolerFive">
                  About
                </Link>
              </div>
              <div>
                <Link to="about">
                  <button>Schedule</button>
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
