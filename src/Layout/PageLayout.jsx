import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import useSidebar from "../Store/sidebarStore";

const PageLayout = ({ children }) => {
  const { sidebarOpen } = useSidebar();

  const location = useLocation();
  const title =
    location.pathname.split("/")[1].charAt(0).toUpperCase() +
    location.pathname.split("/")[1].slice(1);

  return (
    <main
      className={`w-full min-h-screen overflow-auto absolute right-0  transition-all p-4 lg:mt-0 mt-16
      dark:text-gray-100 dark:bg-gray-600 bg-gray-100 text-gray-800 
        ${sidebarOpen
          ? "lg:w-[calc(100%-256px)] lg:ml-[256px]"
          : "lg:w-[calc(100%-64px)] lg:ml-[64px]"
        }`}
    >
      <h1 className="text-3xl lg:text-4xl pb-3 font-bold text-blue-500">{title}</h1>
      {children}
    </main>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
