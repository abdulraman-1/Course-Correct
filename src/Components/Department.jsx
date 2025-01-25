import { useNavigate } from "react-router-dom";
import courecorrect from '../assets/coursecorrect.png';

const Department = () => {
  const navigate = useNavigate()

  return (
      <div className="w-full max-w-lg bg-white flex gap-4 flex-col justify-center items-center p-8 rounded-lg shadow-lg">
        {/* Logo */}
        <img 
          className="w-20 mx-auto filter drop-shadow-lg" 
          src={courecorrect} 
          alt="Course Correct Logo" 
        />
        
        {/* Form Section */}
        <div className="w-full">
          <div className="text-center mb-3">
            <h1 className="text-3xl font-bold mb-3">
              Academic Navigator
            </h1>
            <p className="text-gray-600 text-base">
              Select your academic details to access tailored resources
            </p>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
          }}>
            {/* Faculty Selection */}
            <label
              htmlFor="faculty"
              className="block text-gray-700 tracking-wider text-lg font-medium mb-2"
            >
              University Name
            </label>
            <div className="relative w-full mb-4">
                <select
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    name="faculty"
                    id="faculty"
                >
                    <option value="#">Select your university</option>
                    <option value="engineering">Lagos State University</option>
                    <option value="agriculture">University of Lagos</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                    </svg>
                </div>
            </div>


            <label
              htmlFor="faculty"
              className="block text-gray-700 tracking-wider text-lg font-medium mb-2"
            >
              Faculty
            </label>
            <div className="relative w-full mb-4">
                <select
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    name="faculty"
                    id="faculty"
                >
                    <option value="#">Select your faculty</option>
                    <option value="engineering">Engineering</option>
                    <option value="agriculture">Agriculture</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                    </svg>
                </div>
            </div>


            {/* Department Selection */}
            <label
              htmlFor="department"
              className="block text-gray-700 tracking-wider text-lg font-medium mb-2"
            >
              Department
            </label>
            <div className="relative w-full mb-4">
                <select
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    name="department"
                    id="department"
                >
                    <option value="#">Select your department</option>
                    <option value="ece">Electronics and Computer Engineering</option>
                    <option value="mech">Mechanical Engineering</option>
                    <option value="cpe">Chemical And Polymetric Engineering</option>
                    <option value="ase">Aerospace Engineering</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                    </svg>
                </div>
            </div>

            {/* Level Selection */}
            <label
              htmlFor="level"
              className="block text-gray-700 tracking-wider text-lg font-medium mb-2"
            >
              Level
            </label>
            <div className="relative w-full mb-4">
                <select
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    name="level"
                    id="level"
                >
                    <option value="#">Select your level</option>
                    <option value="200">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="300">400</option>
                    <option value="300">500</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                    </svg>
                </div>
            </div>

            {/* Semester Selection */}
            <label
              htmlFor="semester"
              className="block text-gray-700 tracking-wider text-lg font-medium mb-2"
            >
              Semester
            </label>
            <div className="relative w-full mb-8">
                <select
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    name="semester"
                    id="semester"
                >
                    <option value="#">Select your semester</option>
                    <option value="1">First semester</option>
                    <option value="2">Seconsd semester</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                    </svg>
                </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 py-3 rounded text-white font-medium hover:bg-blue-600 transition duration-200"
              onClick={() => navigate('/courses')}
            >
              Continue to Resources
            </button>
          </form>
        </div>
      </div>
  );
};

export default Department;