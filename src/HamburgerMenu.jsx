import useHamburger from './Store/hamburgerSore';
import useSidebar from './Store/sidebarStore';

const HamburgerMenu = () => {

  const { hamburgerOpen, toggleHamburger } = useHamburger();
  const {reset} = useSidebar()

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={()=> {
          reset()
          toggleHamburger()
        }}
        className="flex flex-col justify-center items-center space-y-1 w-8 h-8 focus:outline-none"
        aria-label="Toggle Menu"
      >
        {/* Top bar */}
        <div
          className={`bg-black dark:bg-white w-6 h-[3px] transition-all duration-300 ease-in-out ${
            hamburgerOpen ? 'rotate-45 translate-y-[0.44rem]' : ''
          }`}
        ></div>
        
        {/* Middle bar */}
        <div
          className={`bg-black dark:bg-white w-6 h-[3px] transition-all duration-300 ease-in-out ${
            hamburgerOpen ? 'opacity-0' : ''
          }`}
        ></div>
        
        {/* Bottom bar */}
        <div
          className={`bg-black dark:bg-white w-6 h-[3px] transition-all duration-300 ease-in-out ${
            hamburgerOpen ? '-rotate-45 -translate-y-[0.44rem]' : ''
          }`}
        ></div>
      </button>
    </div>
  );
};

export default HamburgerMenu;
