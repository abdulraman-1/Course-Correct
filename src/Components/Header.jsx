import coursecorrect from '../assets/coursecorrect.png';
import HamburgerMenu from '../HamburgerMenu';

const Header = () => {
  return (
    <header className='
    bg-white p-4 fixed top-0 lg:hidden w-full shadow-sm z-30
    dark:bg-gray-800 text-gray-800 dark:text-gray-200
    '
    >
        <div className='flex items-center'>
            <HamburgerMenu />
            <img src={coursecorrect} alt="Course Correct Logo" className="w-10 h-auto mx-auto" />
        </div>
    </header>
  )
}

export default Header