import "./App.css";
import { Link, Outlet } from "react-router-dom";
import myLogo from "./assets/logo-transparent.png";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <header className="bg-white text-coolerTwo " data-testid="header-menu">
          <nav className="max-w-5xl mx-auto">
            <div className="flex justify-between py-spacing-1 items-center">
              <div className="max-w-[150px] ">
                <Link to="home">
                  <img src={myLogo} alt="" />
                </Link>
              </div>
              <div className="flex justify-between items-center gap-x-spacing-7">
                <Link
                  to="about"
                  className="text-lg text-coolerFive hover:text-coolerTwo"
                >
                  Services and prices
                </Link>
                <Link
                  to="about"
                  className="text-lg text-coolerFive hover:text-coolerTwo"
                >
                  About
                </Link>
              </div>
              <div>
                <Button
                  asChild
                  className="px-spacing-4 py-spacing-2 rounded-full bg-coolerFive hover:bg-coolerTwo hover:text-black"
                >
                  <Link to="about">Schedule a cleaning</Link>
                </Button>
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
