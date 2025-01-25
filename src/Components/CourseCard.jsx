// CourseCard.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ courseicon, coursetitle, coursecode, courseid }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/courses/${courseid}`)}
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="p-6">
        {/* Icon Container */}
        <div className="mb-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-10 rounded-xl" />
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <FontAwesomeIcon 
              icon={courseicon} 
              className="text-2xl text-white transform group-hover:scale-110 transition-transform" 
            />
          </div>
        </div>

        {/* Course Info */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{coursecode}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{coursetitle}</p>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4">
          <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-500" 
              style={{ width: `0%` }}
            />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 inline-block">
            Start Course
          </span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

CourseCard.propTypes = {
  courseicon: PropTypes.object.isRequired,
  coursetitle: PropTypes.string.isRequired,
  coursecode: PropTypes.string.isRequired,
  courseid: PropTypes.number.isRequired,
};

export default CourseCard;