import "./home.css";
import cleaningFloor from "../assets/cleaning-floor.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" bg-white">
      <div className="bg-white">
        <section className="main-home flex flex-col items-center">
          <h1 className="text-coolerThree flex-1">
            Making Your Home Sparkle, One Checkmark ✅ at a Time
          </h1>
          <div className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-spacing-8">
            <img
              src={cleaningFloor}
              alt=""
              className="justify-self-end rounded-lg clean-image"
            />
            <div>
              <p className=" text-coolerThree text-center md:text-left mt-spacing-4 mb-spacing-4 important-para">
                Your to-do list is long enough. Let To-Do List Cleaner LLC
                transform your home into the pristine sanctuary you deserve. As
                Denver's trusted cleaning specialists, we believe every spotless
                surface brings you one step closer to peace of mind.
              </p>
              <div className="flex justify-center md:block">
                <Button
                  asChild
                  className=" font-bold text-lg font-sans px-spacing-3 py-spacing-1 rounded-full bg-coolerFive hover:bg-coolerTwo text-white  hover:text-coolerOne "
                >
                  {/* <Link to="/services">Learn about our services</Link> */}
                  <a className="hover:cursor-pointer ">
                    Learn about our services
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-coolerTwo ">
          <h2 className="text-coolerOne">Our Most Popular Services</h2>
          <div className="">
            <div className="">
              <h3 className="">Basic Clean</h3>
              <p className="">
                Weekly or bi-weekly maintenance to keep your home fresh
              </p>
            </div>
            <div className="">
              <h3 className="">Deep Clean</h3>
              <p className="">Thorough cleaning for those special occasions</p>
            </div>
          </div>
          <button className="">View All Services</button>
        </section>

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
    </div>
  );
};

export default Home;
