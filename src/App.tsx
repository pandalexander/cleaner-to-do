import "./App.css";
import { Link, Outlet } from "react-router-dom";
import myLogo from "./assets/logo-transparent.png";
import { Button } from "@/components/ui/button";
import menuIcon from "./assets/menu.svg";
import { useState } from "react";

function App() {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const handleHamburgerClick = () => {
    console.log("clicked!");
    setHamburgerClicked(!hamburgerClicked);
  };
  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <header
          className="bg-coolerOne text-coolerTwo px-spacing-2 "
          data-testid="header-menu"
        >
          <nav className="max-w-5xl mx-auto">
            <div className="flex justify-between py-spacing-1 items-center">
              <div className="max-w-[150px] ">
                <Link to="home">
                  <img src={myLogo} alt="" />
                </Link>
              </div>

              <div className="md:hidden mr-spacing-4">
                <div>
                  <img
                    src={menuIcon}
                    alt=""
                    className="min-w-[35px] ml-auto"
                    onClick={handleHamburgerClick}
                  />

                  <div
                    className={
                      "bg-coolerFive max-w-[250px] menu " +
                      (hamburgerClicked ? "" : "hidden")
                    }
                  >
                    {" "}
                    <div className="flex flex-col ">
                      <Button
                        asChild
                        className="flex-1 p-spacing-3 rounded-none font-normal bg-coolerFive text-coolerOne hover:bg-coolerOne hover:text-coolerThree"
                      >
                        <Link to="about">Home</Link>
                      </Button>
                      <Button
                        asChild
                        className="flex-1 p-spacing-3 rounded-none font-normal bg-coolerFive text-coolerOne hover:bg-coolerOne hover:text-coolerThree"
                      >
                        <Link to="about">Services and prices</Link>
                      </Button>
                      <Button
                        asChild
                        className="flex-1 p-spacing-3 rounded-none font-normal bg-coolerFive text-coolerOne hover:bg-coolerOne hover:text-coolerThree"
                      >
                        <Link to="about">About</Link>
                      </Button>
                      <Button
                        asChild
                        className="flex-1 p-spacing-3 rounded-none font-normal bg-coolerFive text-coolerOne hover:bg-coolerOne hover:text-coolerThree"
                      >
                        <Link to="about">Schedule a cleaning</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex justify-between items-center gap-x-spacing-7">
                <div className="flex justify-between items-center gap-x-spacing-7">
                  <Link
                    to="home"
                    className="text-lg text-coolerThree hover:text-coolerTwo"
                  >
                    Home
                  </Link>
                  <Link
                    to="about"
                    className="text-lg text-coolerThree hover:text-coolerTwo"
                  >
                    Services and prices
                  </Link>
                  <Link
                    to="about"
                    className="text-lg text-coolerThree hover:text-coolerTwo"
                  >
                    About
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <Button
                  asChild
                  className="font-normal px-spacing-4 py-spacing-2 rounded-full bg-coolerFive hover:bg-coolerOne text-coolerOne  hover:text-coolerThree"
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
