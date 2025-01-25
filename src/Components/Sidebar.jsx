import coursecorrect from '../assets/coursecorrect.png';
import sidebar from '../assets/sidebaricon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendar, faBlog, faVideo, faComment, faUser, faGear, faRightFromBracket, faBook, faAddressCard,faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import useHamburger from '../Store/hamburgerSore';
import useSidebar from '../Store/sidebarStore';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const { hamburgerOpen } = useHamburger();


  return (
    <aside
      className={`${hamburgerOpen ? 'flex' : 'hidden'} lg:flex flex-col justify-between px-0 
        left-0 top-0 fixed z-10
        bg-white dark:bg-gray-800 border-r dark:border-gray-700 
        text-gray-800 dark:text-gray-200 
        h-full ${sidebarOpen ? 'w-[289px]' : 'w-[65px]'} transition-all`}
    >
      <div className="w-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 w-full">
          {/* Logo */}
          {sidebarOpen && (
            <img
              src={coursecorrect}
              alt="Course Correct Logo"
              className="w-10 h-auto"
            />
          )}

          {/* Sidebar Icon */}
          <button
            className="focus:outline-none w-10"
            aria-label="Toggle Sidebar"
            onClick={toggleSidebar}
          >
            <img
              src={sidebar}
              alt="Sidebar Icon"
              className={`w-6 h-[38.77px] cursor-pointer hover:opacity-60 transition-opacity ${
                sidebarOpen ? 'rotate-0' : 'rotate-180'
              }`}
            />
          </button>
        </div>

        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-gray-200 dark:bg-gray-700 h-[1px] w-full"
        ></div>

        {/* Navigation */}
        <nav className="flex flex-col w-full">
          <ul className="text-lg">
            {[
              { icon: faHouse, label: 'Courses', link: "/courses" },
              { icon: faCalendar, label: 'Calendar', link: "/calendar" },
              { icon: faBlog, label: 'Blog', link: "" },
              { icon: faVideo, label: 'Tutorial Videos', link: "tutorialvideo" },
              { icon: faBook, label: 'PastQuestions', link: "/pastquestions" },
              { icon: faComment, label: 'BrainStorm', link: "/brainstorm" },
              { icon: faAddressCard, label: 'About Us', link: "/about" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="flex items-center gap-3 font-medium rounded-sm p-4 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white"
              >
                <FontAwesomeIcon icon={item.icon} />
                <li className={`lg:${sidebarOpen ? 'block' : 'hidden'} block`}>
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-gray-200 dark:bg-gray-700 h-[1px] w-full"
        ></div>
      </div>

      {/* Footer */}
      <div className="w-full">
        {/* Profile and Settings */}
        <div
          className={`flex ${
            sidebarOpen ? 'flex-row' : 'flex-col'
          } gap-4 justify-between items-center p-4 w-full`}
        >
          <button className="p-2 border-blue-500 dark:border-blue-400 border rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </button>

          <div className={`flex ${
            sidebarOpen ? 'flex-row' : 'flex-col'
          } gap-4 `}>
            <button className="flex items-center justify-center">
              <FontAwesomeIcon icon={faCircleHalfStroke} className="text-2xl" />
            </button>
            <button className="flex items-center justify-center">
              <FontAwesomeIcon icon={faGear} className="text-2xl" />
            </button>
          </div>
        </div>

        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-gray-200 dark:bg-gray-700 h-[1px] w-full"
        ></div>

        <ul className="text-lg">
          <Link
            to="#"
            className="flex items-center gap-3 font-medium rounded-sm p-4 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white"
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            <li className={`lg:${sidebarOpen ? 'block' : 'hidden'} block`}>
              Logout
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
