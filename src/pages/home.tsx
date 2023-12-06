import Header1 from "@/assets/images/header1.png";
import SectionTwoBg from "@/assets/images/section2-2.png";
import SectionTwoImage from "@/assets/images/section2.png";
import SectionThreeImage from "@/assets/images/section3.png";
import SectionFourImage from "@/assets/images/section4.png";
import SectionFiveImage from "@/assets/images/section5.png";
import SectionSixImage from "@/assets/images/section6.svg";
const Home = () => {
  return (
    <div>
      <section className="w-full px-6 py-4">
        <div className="lg:w-[90%] mx-auto grid grid-cols-1  md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
          <div className="self-center">
            <div className="sm:w-[90%] mx-auto">
              <div className="  flex flex-col justify-center ">
                <h3 className="text-blue-main text-4xl lg:text-6xl xl:text-7xl w-fit font-semibold relative mb-4">
                  Go Business
                  <svg
                    width="64"
                    height="70"
                    viewBox="0 0 64 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-4 -top-6 -right-3"
                  >
                    <path d="M3 39L23 2" stroke="#0D6EFD" stroke-width="5" />
                    <path
                      d="M16.105 50.9711L51.4195 27.7399"
                      stroke="#0D6EFD"
                      stroke-width="5"
                    />
                    <path
                      d="M21.6786 67.1182L63.464 60.7324"
                      stroke="#0D6EFD"
                      stroke-width="5"
                    />
                  </svg>
                </h3>
                <h4 className="text-[#383737]  font-semibold text-2xl md:text-3xl mb-4">
                  Go Global with GoBusiness
                </h4>
                <p className="mb-6 w-[90%] font-medium text-text-muted ">
                  Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem
                  facilis eum iusto eligendi eum magnam voluptas et perspiciatis
                  sequi qui molestiae nostrum
                </p>
                <div>
                  <button className="bg-blue-main text-white font-medium rounded-[20px] py-3 px-8 text-lg">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={Header1} alt="" className="w-full" />
          </div>
        </div>
      </section>
      <section>
        <div className="  grid grid-cols-1  md:grid-cols-2 gap-6 lg:gap-0">
          <div>
            <img src={SectionTwoImage} alt="" className="w-full" />
          </div>

          <div
            className="bg-no-repeat bg-center "
            style={{ backgroundImage: `url(${SectionTwoBg})` }}
          >
            <div className="w-full  relative py-6">
              <svg
                width="208"
                height="264"
                viewBox="0 0 208 264"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" hidden lg:block w-12 md:w-20 lg:w-22 xl:w-24  lg:absolute  right-0 -top-12"
              >
                <path
                  d="M159.503 158.08C162.176 152.385 152.596 147.872 144.24 150.988C139.339 152.815 125.191 163.989 125.525 165.708C127.642 176.237 153.598 170.435 159.503 158.08Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  d="M230.466 134.871C213.644 141.64 116.279 209.866 109.929 219.213C106.475 224.263 117.393 229.098 124.522 225.767C132.878 222.007 204.398 169.037 235.591 142.929C239.935 139.383 235.702 132.829 230.466 134.871Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  d="M15.5708 129.177C-0.136985 139.277 -3.03344 143.145 2.75948 145.939C14.1225 151.526 21.4752 143.145 35.4005 134.442C44.8697 128.425 28.1592 121.012 15.5708 129.177Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  d="M64.4765 150.129C76.3965 144.542 93.4411 133.153 113.605 117.036C122.183 110.16 139.785 97.6956 152.707 89.3151C175.768 74.3805 178.33 72.2317 174.654 70.9424C171.534 69.7605 170.866 70.0839 132.989 92.1096C95.0007 114.243 67.1501 131.649 54.2274 141.533C37.9628 153.889 48.7687 157.542 64.4765 150.129Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  d="M58.015 116.284C66.2587 111.879 82.0779 101.135 115.833 78.357C162.511 46.8764 191.587 28.7186 196.043 24.0984L199.385 20.66C194.594 16.8995 191.698 13.4614 176.324 21.1973C155.604 31.5121 83.4147 81.042 56.3439 102.745C41.0819 114.779 45.538 122.946 58.015 116.284Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  d="M43.9785 184.94C32.3926 193.858 32.0583 194.288 36.403 197.403C44.8696 203.42 76.0623 188.808 71.0492 181.072C66.2589 173.659 56.7897 174.948 43.9785 184.94Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  d="M315.801 3.03875C307.78 6.90669 142.458 114.672 91.5474 152.169C69.8239 168.178 83.6378 170.649 98.6771 163.665C117.95 154.748 127.419 142.392 262.327 55.9004C316.358 21.1968 331.397 9.91486 331.397 3.89808C331.397 0.245027 322.485 -0.184525 315.801 3.03875Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  d="M238.932 100.489C248.847 91.7863 273.244 74.1657 280.151 69.4382C283.048 67.1819 275.473 65.7852 271.573 67.8266C205.289 102.853 144.797 149.806 164.85 149.806C173.205 149.806 212.864 123.589 238.932 100.489Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  d="M141.456 246.29C128.867 254.133 126.862 258.861 134.66 262.514C143.015 266.489 155.492 261.117 161.397 251.125C164.405 245.86 148.363 241.992 141.456 246.29Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  d="M271.797 150.021C259.542 158.617 230.912 179.89 201.056 199.123C159.726 225.768 151.593 234.471 164.182 238.017C171.869 240.166 188.913 228.777 219.437 200.412C230.466 190.097 259.097 166.997 274.247 155.716C282.491 149.591 280.04 144.219 271.797 150.021Z"
                  fill="black"
                  fillOpacity="0.2"
                />
              </svg>
              <div className="w-[90%]  mx-auto md:mt-16 lg:mt-20 xl:mt-28">
                <h4 className="text-blue-main font-semibold text-xl md:text-2xl mb-6">
                  Your Ultimate Travel Products Destination For Organizations.
                </h4>
                <p className="mb-6 w-[90%] font-medium text-text-muted ">
                  Explore the incredible potential of international education by
                  securing your students admission to prestigious universities
                  abroad. Our comprehensive program equips
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-6 py-4">
        <div className="lg:w-[90%] mx-auto grid grid-cols-1  md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
          <div className="self-center">
            <div className="sm:w-[85%] mx-auto">
              <div className=" drop-card p-6 md:p-12  xl:py-20 rounded-[40px]">
                <h4 className="text-[#383737]  font-semibold text-2xl md:text-3xl mb-4">
                  Request and Approval Management System
                </h4>
                <p className="mb-6 w-[90%] font-medium text-text-muted ">
                  Explore the incredible potential of international education by
                  securing your students admission to prestigious universities
                  abroad. Our comprehensive program equips
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={SectionThreeImage}
              alt=""
              className="w-full lg:w-[85%] mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="w-full px-6 pt-4 pb-24">
        <div className="lg:w-[90%] mx-auto grid grid-cols-1  md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
          <div>
            <img
              src={SectionFourImage}
              alt=""
              className="w-full lg:w-[85%] mx-auto"
            />
          </div>
          <div className="self-center">
            <div className="sm:w-[85%] mx-auto">
              <div className=" drop-card p-6 md:p-12  xl:py-20 rounded-[40px]">
                <h4 className="text-[#383737]  font-semibold text-2xl md:text-3xl mb-4">
                  <span className="mr-1 text-blue-main">Connect:</span>
                  Your Coperate Social Network
                </h4>
                <p className="mb-6 w-[90%] font-medium text-text-muted ">
                  Explore the incredible potential of international education by
                  securing your students admission to prestigious universities
                  abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${SectionSixImage})` }}
      >
        <div className="  grid grid-cols-1  md:grid-cols-2 gap-6 lg:gap-0">
          <div>
            <div className="w-[90%] lg:w-[75%] mx-auto md:mt-16 lg:mt-20 xl:mt-28">
              <h4 className="text-blue-main font-semibold text-xl md:text-2xl mb-6">
                Travel Expense <br />
                Management System
              </h4>
              <p className="mb-6 w-[90%] font-medium text-text-muted ">
                Explore the incredible potential of international education by
                securing your students admission to prestigious universities
                abroad.
              </p>
            </div>
          </div>
          <div>
            <img src={SectionFiveImage} alt="" className="w-full lg:-mt-16" />
          </div>
        </div>
        <div className="py-24 flex justify-center">
          <div className="text-center">
            <h4 className="font-medium text-blue-main text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6">
              Register Now and Enjoy these Benefits!{" "}
            </h4>
            <button className="bg-white border-[0.5px] border-blue-main text-blue-main  py-3 px-8 hover:bg-blue-main hover:text-white rounded-[20px]">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
