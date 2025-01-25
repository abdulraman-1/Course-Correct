import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import courecorrect from '../assets/coursecorrect.png';
import { Link } from "react-router-dom";

const PWD_REGEX = /^.{8,}$/;

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const userRef = useRef();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');

  const [pwd, setPwd] = useState('');

  const [matchPwd, setMatchPwd] = useState('');

  const [validPwd, setValidPwd] = useState(false);

  const [validMatch, setValidMatch] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validPwd || !validMatch) {
      alert("Please fix the errors before submitting!");
      return;
    }
    console.log({ user, pwd });
  };

  return (
    <div className="w-full max-w-lg bg-white flex flex-col justify-center items-center p-8 rounded-lg shadow-lg">
        <img className="w-20 mb-4" src={courecorrect} alt="course correct logo" />
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-6">Sign up</h2>
          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <label htmlFor="user" className="block text-gray-700 text-base font-medium mb-2">
              Name
            </label>
            <input
              ref={userRef}
              id="user"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />

            {/* Email Input */}
            <label htmlFor="email" className="block text-gray-700 text-base font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />

            {/* Password Input */}
            <label htmlFor="pwd" className="block text-gray-700 text-base font-medium mb-2">
              Password
            </label>
            <div className="relative mb-4">
              <input
                id="pwd"
                type={showPassword ? "text" : "password"}
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>

            {!validPwd ? <p className='mb-1 -mt-2 text-sm text-right text-gray-500'>Passwords must be at least 8 character</p> : null}

            {/* Confirm Password */}
            <label htmlFor="confirmPwd" className="block text-gray-700 text-base font-medium mb-2">
              Confirm Password
            </label>
            <div className="relative mb-6">
              <input
                id="confirmPwd"
                type={showConfirmPassword ? "text" : "password"}
                value={matchPwd}
                onChange={(e) => setMatchPwd(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setConfirmShowPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </button>
            </div>

            <button type="submit" className="w-full bg-blue-500 py-3 rounded text-white">
              Submit
            </button>
          </form>
          <p className="text-center mt-2 text-sm text-gray-500">Already have an account? <span className="text-blue-600 underline font-medium"><Link to="/login">Login</Link></span></p>
        </div>
      </div>
  );
};

export default Signup;