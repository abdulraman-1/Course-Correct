import coursecorrect from '../assets/coursecorrect.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 bg-gray-200 text-black -mb-4 -mx-4 dark:text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <img 
              src={coursecorrect} 
              alt="Course Correct" 
              className="h-12 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students with quality educational resources and collaborative learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FontAwesomeIcon icon={faFacebook} className='text-xl' />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} className='text-xl' />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <FontAwesomeIcon icon={faInstagram} className='text-xl' />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <FontAwesomeIcon icon={faLinkedin} className='text-xl' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Courses', 'Tutorials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-500 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Past Questions', 'Study Materials', 'Blog', 'Support'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-500 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>123 Education Street</li>
              <li>Lagos, Nigeria</li>
              <li>Email: support@coursecorrect.ng</li>
              <li>Phone: +234 812 345 6789</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Course Correct. All rights reserved.
            <span className="block md:inline mt-1 md:mt-0">
              <a href="#" className="hover:text-blue-500 ml-0 md:ml-4">Privacy Policy</a> | 
              <a href="#" className="hover:text-blue-500"> Terms of Service</a> | 
              <a href="#" className="hover:text-blue-500"> Cookie Policy</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;