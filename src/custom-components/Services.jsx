import "./home.css";

const Services = () => {
  return (
    <div className=" bg-white">
      <div className="bg-white">
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-coolerThree">Our Services & Pricing</h1>

          <p className="text-coolerThree mt-spacing-5 mb-spacing-4 text-center">
            Transparent pricing for every need. All services include our
            signature checklist approach.
          </p>
        </section>

        <section className="bg-coolerTwo flex flex-col justify-center items-center">
          <h1 className="text-coolerOne text-center">Cleaning Services</h1>
          <div
            className="
          grid sm:grid-cols-2 
          sm:gap-spacing-3
          md:gap-spacing-6 lg:gap-spacing-9"
          >
            <div>
              <div className="">
                <h3 className="">Basic Clean</h3>
                <p className="">Starting at $150</p>
              </div>
              <ul className="">
                <li className="">Dusting all surfaces</li>
                <li className="">Vacuuming and mopping floors</li>
                <li className="">Bathroom sanitization</li>
                <li className="">Kitchen deep clean</li>
              </ul>
              <button className="">Book Basic Clean</button>
            </div>
            <div>
              <h3 className="">Deep Clean</h3>
              <div className="">
                <p className="">Starting at $250</p>
                <ul className="">
                  <li className="">Everything in Basic Clean</li>
                  <li className="">Inside cabinet cleaning</li>
                  <li className="">Baseboards and door frames</li>
                  <li className="">Window sills and tracks</li>
                </ul>
                <button className="">Book Deep Clean</button>
              </div>
            </div>

            <div>
              <h3 className="">Move In/Out Clean</h3>
              <div className="">
                <p className="">Starting at $350</p>
                <ul className="">
                  <li className="">Deep Clean package plus:</li>
                  <li className="">Inside appliances</li>
                  <li className="">Garage sweep</li>
                  <li className="">Wall washing</li>
                </ul>
                <button className="">Book Move Clean</button>
              </div>
            </div>

            <div>
              <h3 className="">After Party Clean</h3>
              <div className="">
                <p className="">Starting at $200</p>
                <ul className="">
                  <li className="">Quick response service</li>
                  <li className="">Focus on event areas</li>
                  <li className="">Stain treatment</li>
                  <li className="">Trash removal</li>
                </ul>
                <button className="">Book Party Clean</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
