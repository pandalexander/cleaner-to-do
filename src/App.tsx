import "./App.css";
import { Link, Outlet } from "react-router-dom";
import myLogo from "./assets/logo-transparent.png";
import { Button } from "@/components/ui/button";
import menuIcon from "./assets/menu.svg";
import xIcon from "./assets/x.svg";

import { useState } from "react";

function App() {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const handleHamburgerClick = () => {
    console.log("clicked!");
    setHamburgerClicked(!hamburgerClicked);
  };
  return (
    <>
      <div className="min-h-screen">
        <header className="bg-white text-coolerTwo" data-testid="header-menu">
          <nav className="max-w-5xl mx-auto px-spacing-2">
            <div className="flex justify-between py-spacing-1 items-center">
              <div className="max-w-[120px]">
                <Link to="home">
                  <img src={myLogo} alt="Company logo" />
                </Link>
              </div>

              <div className="md:hidden mr-spacing-4">
                <div>
                  <img
                    src={hamburgerClicked ? xIcon : menuIcon}
                    alt=""
                    className="min-w-[35px] ml-auto"
                    onClick={handleHamburgerClick}
                  />

                  <div
                    className={
                      "bg-coolerTwo rounded-lg max-w-[250px] " +
                      (hamburgerClicked ? "menu" : "menu-hidden")
                    }
                  >
                    {" "}
                    <div className="flex flex-col gap-spacing-2 p-spacing-3">
                      <Button
                        asChild
                        className="flex-1 p-spacing-3  font-normal rounded-full hover:bg-coolerFour  bg-coolerOne text-coolerThree"
                      >
                        <Link to="home">Home</Link>
                      </Button>
                      <Button
                        asChild
                        className="flex-1 p-spacing-3 font-normal rounded-full hover:bg-coolerFour bg-coolerOne text-coolerThree"
                      >
                        <Link to="services">Services and prices</Link>
                      </Button>
                      {/* <Button
                        asChild
                        className="flex-1 p-spacing-3  font-normal rounded-full hover:bg-coolerFour bg-coolerOne text-coolerThree"
                      >
                        <Link to="about">About</Link>
                      </Button> */}
                      <Button
                        asChild
                        className="flex-1 p-spacing-3 font-normal rounded-full hover:bg-coolerFour bg-coolerOne text-coolerThree"
                      >
                        <Link to="services">Schedule a cleaning</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex justify-between items-center gap-x-spacing-7">
                <div className="flex justify-between items-center gap-x-spacing-7">
                  <Link
                    to="home"
                    className=" font-bold text-lg text-coolerThree hover:text-coolerTwo"
                  >
                    Home
                  </Link>
                  <Link
                    to="services"
                    className="font-bold text-lg text-coolerThree hover:text-coolerTwo"
                  >
                    Services and prices
                  </Link>
                  {/* <Link
                    to="about"
                    className="text-lg text-coolerThree hover:text-coolerTwo"
                  >
                    About
                  </Link> */}
                </div>
              </div>
              <div className="hidden md:block">
                <Button
                  asChild
                  className="font-bold text-lg px-spacing-3 py-spacing-1 rounded-full bg-coolerFive hover:bg-coolerTwo text-white  hover:text-coolerOne"
                >
                  <Link to="services">Schedule a cleaning</Link>
                </Button>
              </div>
            </div>
          </nav>
        </header>

        <div className="flex flex-col flex-1">
          <Outlet />
        </div>
        <section className="bg-coolerThree">
          <h2 className="text-coolerOne">Why Denver Trusts Us</h2>
          <div className="">
            <p className="text-coolerOne">
              Family-owned • Professional • Insured
            </p>
            <button className="text-coolerTwo">Schedule Now</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
