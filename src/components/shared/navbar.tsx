import LogoBlue from "@/assets/images/logo-blue.svg";
import Avatar from "@/assets/images/avatar.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const navItems = [
  { name: "Home", link: "/", drop: false },
  { name: "Solutions", link: "/solutions", drop: true },
  { name: "Products", link: "/products", drop: true },
  { name: "Company", link: "/company", drop: true },
];
const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const closeSidebar = () => {
    setIsExpanded(false);
  };
  const sidebarRef = useOutsideClick(closeSidebar);
  return (
    <div className="w-full py-2 px-6 md:px-8 lg:px-10">
      <nav className="flex items-center justify-between">
        <div>
          <img src={LogoBlue} alt="logo-blue" className="w-24" />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navItems.map((item) =>
              item.drop ? (
                <li key={item.name}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      "text-text-main hover:text-blue-main flex items-center 3" +
                      (isActive && "!text-blue-main font-semibold")
                    }
                  >
                    {item.name}
                    <svg
                      width="20"
                      height="12"
                      viewBox="0 0 20 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 ml-2 "
                    >
                      <path
                        d="M19.5452 0.438697C19.2639 0.157491 18.8824 -0.000483513 18.4847 -0.000483513C18.0869 -0.000483513 17.7055 0.157491 17.4242 0.438697L9.9992 7.8637L2.5742 0.438697C2.29129 0.16546 1.91239 0.0142679 1.51909 0.0176859C1.1258 0.0211039 0.749578 0.178856 0.471466 0.456968C0.193354 0.735081 0.0356026 1.1113 0.0321846 1.50459C0.0287666 1.89789 0.179958 2.27679 0.453196 2.5597L8.9387 11.0452C9.21999 11.3264 9.60145 11.4844 9.9992 11.4844C10.3969 11.4844 10.7784 11.3264 11.0597 11.0452L19.5452 2.5597C19.8264 2.2784 19.9844 1.89694 19.9844 1.4992C19.9844 1.10145 19.8264 0.719989 19.5452 0.438697Z"
                        fill="currentColor"
                      />
                    </svg>
                  </NavLink>
                </li>
              ) : (
                <li key={item.name}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      "text-text-main hover:text-blue-main  " +
                      (isActive && "!text-blue-main font-semibold")
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="border-[0.3px] border-black rounded-full p-2 flex items-center gap-x-3">
            <img src={Avatar} alt="avatar" className="w-6" />
            <span>Emmanuel</span>
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 ml-2 "
            >
              <path
                d="M19.5452 0.438697C19.2639 0.157491 18.8824 -0.000483513 18.4847 -0.000483513C18.0869 -0.000483513 17.7055 0.157491 17.4242 0.438697L9.9992 7.8637L2.5742 0.438697C2.29129 0.16546 1.91239 0.0142679 1.51909 0.0176859C1.1258 0.0211039 0.749578 0.178856 0.471466 0.456968C0.193354 0.735081 0.0356026 1.1113 0.0321846 1.50459C0.0287666 1.89789 0.179958 2.27679 0.453196 2.5597L8.9387 11.0452C9.21999 11.3264 9.60145 11.4844 9.9992 11.4844C10.3969 11.4844 10.7784 11.3264 11.0597 11.0452L19.5452 2.5597C19.8264 2.2784 19.9844 1.89694 19.9844 1.4992C19.9844 1.10145 19.8264 0.719989 19.5452 0.438697Z"
                fill="#7C8DB5"
              />
            </svg>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:hidden"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
      <div
        ref={sidebarRef}
        className={`lg:hidden sidebar ${isExpanded ? "block" : "hidden"}`}
      >
        <div className="  h-full  flex flex-col justify-between relative text-white ">
          {/* <Cancel
            className=" absolute -top-4 right-3  w-8"
            onClick={() => setIsExpanded(!isExpanded)}
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="absolute -top-4 right-3  w-8"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <ul className="flex flex-col mx-auto gap-y-4 mb-6">
            {navItems.map((item) =>
              item.drop ? (
                <li key={item.name}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      "text-text-main hover:text-blue-main flex items-center 3" +
                      (isActive && "!text-blue-main font-semibold")
                    }
                  >
                    {item.name}
                    <svg
                      width="20"
                      height="12"
                      viewBox="0 0 20 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 ml-2 "
                    >
                      <path
                        d="M19.5452 0.438697C19.2639 0.157491 18.8824 -0.000483513 18.4847 -0.000483513C18.0869 -0.000483513 17.7055 0.157491 17.4242 0.438697L9.9992 7.8637L2.5742 0.438697C2.29129 0.16546 1.91239 0.0142679 1.51909 0.0176859C1.1258 0.0211039 0.749578 0.178856 0.471466 0.456968C0.193354 0.735081 0.0356026 1.1113 0.0321846 1.50459C0.0287666 1.89789 0.179958 2.27679 0.453196 2.5597L8.9387 11.0452C9.21999 11.3264 9.60145 11.4844 9.9992 11.4844C10.3969 11.4844 10.7784 11.3264 11.0597 11.0452L19.5452 2.5597C19.8264 2.2784 19.9844 1.89694 19.9844 1.4992C19.9844 1.10145 19.8264 0.719989 19.5452 0.438697Z"
                        fill="currentColor"
                      />
                    </svg>
                  </NavLink>
                </li>
              ) : (
                <li key={item.name}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      "text-text-main hover:text-blue-main  " +
                      (isActive && "!text-blue-main font-semibold")
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <div className="flex flex-col items-center gap-y-6">
            <div className="border-[0.3px] border-black rounded-full p-2 flex items-center gap-x-3">
              <img src={Avatar} alt="avatar" className="w-6" />
              <span className="text-black">Emmanuel</span>
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 ml-2 "
              >
                <path
                  d="M19.5452 0.438697C19.2639 0.157491 18.8824 -0.000483513 18.4847 -0.000483513C18.0869 -0.000483513 17.7055 0.157491 17.4242 0.438697L9.9992 7.8637L2.5742 0.438697C2.29129 0.16546 1.91239 0.0142679 1.51909 0.0176859C1.1258 0.0211039 0.749578 0.178856 0.471466 0.456968C0.193354 0.735081 0.0356026 1.1113 0.0321846 1.50459C0.0287666 1.89789 0.179958 2.27679 0.453196 2.5597L8.9387 11.0452C9.21999 11.3264 9.60145 11.4844 9.9992 11.4844C10.3969 11.4844 10.7784 11.3264 11.0597 11.0452L19.5452 2.5597C19.8264 2.2784 19.9844 1.89694 19.9844 1.4992C19.9844 1.10145 19.8264 0.719989 19.5452 0.438697Z"
                  fill="#7C8DB5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
