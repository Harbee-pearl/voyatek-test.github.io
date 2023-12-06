import Logo from "@/assets/images/logo.svg";
import Map from "@/assets/images/footer-img.png";

const footerItems = {
  quicklinks: [
    "Home",
    "About Us",
    "Contact Us",
    "Terms and Conditions",
    "Become an Affiliate",
  ],
  businesslinks: ["GoPal", "GoBusiness", "GoFamily", "GoAgent", "GoSchool"],
  socialmedia: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
};

const Footer = () => {
  return (
    <div className="bg-blue-light text-white w-full p-4 md:px-6 xl:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
        <div className="lg:pr-10">
          <div className="mb-8">
            <img
              src={Logo}
              alt="logo"
              className="w-28 md:w-32 lg:w-40 xl:w-44"
            />
          </div>
          <div className="space-y-8 font-bold">
            <p className="">
              Gopaddi is a travel network that connects and strengthens people’s
              relationships with a world of beautiful, happy people who are able
              to reach out for their dreams and be who they want to be.
            </p>
            <p className="">
              This network is a community of individuals, families, and
              organisations who have chosen to take control of their travel
              desires and freely explore a world of limitless possibilities.
            </p>
          </div>
        </div>
        <div className="lg:mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
            <div>
              <h5 className="font-bold text-lg sm:text-xl mb-6">Quick Links</h5>
              <ul className="space-y-3 font-light">
                {footerItems.quicklinks.map((link) => (
                  <li>{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg sm:text-xl mb-6">
                Business Links
              </h5>
              <ul className="space-y-3 font-light">
                {footerItems.businesslinks.map((link) => (
                  <li>{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg sm:text-xl mb-6">
                Business Links
              </h5>
              <ul className="space-y-3 font-light">
                {footerItems.socialmedia.map((link) => (
                  <li>{link}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:mt-12">
          <div className="w-full sm:w-5/6 lg:w-4/5 mx-auto">
            <h5 className="font-bold text-lg sm:text-xl mb-6">
              Subscribe to Our Newsletter
            </h5>
            <input
              className="bg-[#82B4FF] text-white w-full py-1 px-3 focus:outline-none mb-6 placeholder:text-white placeholder:font-semibold"
              placeholder="Email"
            />
            <div className="mb-10">
              <input type="checkbox" className="bg-[#D9D9D9] mr-2" />
              <span>
                By subscribing you are accepting to receive marketing
                information from Aero and agree to the terms of Aero’s Privacy
                Policy.
              </span>
            </div>

            <div>
              <img src={Map} alt="map-image" className="w-5/6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
