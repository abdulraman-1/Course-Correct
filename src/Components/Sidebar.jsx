import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse, faCalendar, faBlog, faVideo, faComment, 
  faUser, faRightFromBracket, faBook, faAddressCard, faCircleHalfStroke 
} from '@fortawesome/free-solid-svg-icons';
import coursecorrect from '../assets/coursecorrect.png';
import useHamburger from '../Store/hamburgerSore';
import useSidebar from '../Store/sidebarStore';

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const { hamburgerOpen, toggleHamburger } = useHamburger();

  // Theme handling
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.add(savedTheme);
  }, []);

  const themeToggle = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    html.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  return (
    <aside className={`${hamburgerOpen ? 'flex' : 'hidden'} lg:flex flex-col justify-between 
      fixed z-10 left-0 top-0 h-full bg-white dark:bg-gray-800 border-r dark:border-gray-700
      ${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 shadow-xl`}>

      {/* Header Section */}
      <div>
        <div className="flex items-center justify-between p-4 py-8 h-16">
          {sidebarOpen && (
            <img src={coursecorrect} alt="Logo" className="h-10 w-auto transition-opacity" />
          )}
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle sidebar"
          >
            <div className={`w-6 h-4 transform transition-transform ${sidebarOpen ? 'rotate-0' : 'rotate-180'}`}>
              <div className="h-1 w-full bg-gray-600 dark:bg-gray-300 mb-1 rounded"></div>
              <div className="h-1 w-3/4 bg-gray-600 dark:bg-gray-300 rounded"></div>
            </div>
          </button>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 mx-4" />
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 p-2">
          {[
            { icon: faHouse, label: 'Courses', link: "/courses" },
            { icon: faCalendar, label: 'Calendar', link: "/calendar" },
            { icon: faBlog, label: 'Blog', link: "" },
            { icon: faVideo, label: 'Tutorials', link: "tutorialvideo" },
            { icon: faBook, label: 'Past Questions', link: "/pastquestions" },
            { icon: faComment, label: 'BrainChat', link: "/brainchat" },
            { icon: faAddressCard, label: 'About Us', link: "/about" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                onClick={toggleHamburger}
                className={`flex items-center gap-3 p-3 rounded-lg 
                  text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700
                  transition-colors ${sidebarOpen ? 'px-4' : 'justify-center'}`}
              >
                <FontAwesomeIcon 
                  icon={item.icon} 
                  className="text-lg min-w-[24px] text-blue-600 dark:text-blue-400" 
                />
                {sidebarOpen && (
                  <span className="text-base font-medium">{item.label}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="p-2 space-y-2">
          <button
            className="w-full flex items-center gap-3 p-3 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={() => {
              themeToggle();
              toggleHamburger();
            }}
          >
            <FontAwesomeIcon 
              icon={faCircleHalfStroke} 
              className="text-lg text-blue-600 dark:text-blue-400" 
            />
            {sidebarOpen && <span>Toggle Theme</span>}
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <FontAwesomeIcon icon={faUser} className="text-lg" />
            {sidebarOpen && <span>Profile</span>}
          </button>

          <Link
            to="#"
            className="flex items-center gap-3 p-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            {sidebarOpen && <span>Logout</span>}
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;