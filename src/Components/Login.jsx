import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import courecorrect from '../assets/coursecorrect.png';
import { Link } from "react-router-dom";

const Login = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus()
  }, []);
  
   
  return (
    <div className="w-full max-w-lg bg-white flex flex-col justify-center items-center p-8 rounded-lg shadow-lg">
        <img className="w-20 mb-4" src={courecorrect} alt="course correct logo" />
        <div className="w-full">
            <h2 className="text-3xl font-bold mb-6">Login</h2>
            <form>
                {/* Email input */}
                <label htmlFor="email" className="block text-gray-700 text-base font-medium mb-2">
                    Email
                </label>
                <input 
                    type="text"
                    ref={userRef}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                 />

                {/* Password Input */}
                <label htmlFor="pwd" className="block text-gray-700 text-base font-medium mb-2">
                    Password
                </label>
                <div className="relative mb-6">
                    <input
                        id="pwd"
                        type = {showPassword ? "text" : "password"}
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                    />
                    <button
                        onClick={() => setShowPassword(!showPassword)}
                        type="button"
                        className="absolute inset-y-0 right-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                    </button>
                </div>
                <button type="submit" className="w-full bg-blue-500 py-3 rounded text-white">
                    Login
                </button>
            </form>
            <p className="text-center mt-2 text-sm text-gray-500">Need to create an account? <span className="text-blue-600 underline font-medium"><Link to="/signup">Sign Up</Link></span></p>
        </div>
    </div>
  )
}

export default Login