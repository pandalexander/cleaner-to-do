import "./home.css";

const Home = () => {
  return (
    <div className=" bg-coolerOne">
      <div className="bg-coolerFive">
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-coolerOne">
            Making Your Home Sparkle, One Checkmark ✅ at a Time
          </h1>
          <p className="text-coolerOne">
            Your to-do list is long enough. Let To-Do List Cleaner LLC transform
            your home into the pristine sanctuary you deserve.
          </p>
          <p className="text-coolerOne mt-spacing-5 mb-spacing-4">
            As Denver's trusted cleaning specialists, we believe every spotless
            surface brings you one step closer to peace of mind.
          </p>
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
