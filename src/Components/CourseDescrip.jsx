// CourseDescrip.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

const CourseDescrip = ({
  schedulelesson,
  scheduletitle,
  scheduledate,
  lessonid,
  status,
}) => {
  const statusColors = {
    completed:
      "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
    current: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    upcoming: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400",
  };

  const { courseId } = useParams();

  return (
    <Link
      to={`/course/${courseId}/lesson/${lessonid}`}
      className="group p-6 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors cursor-pointer"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className={`${statusColors[status]} px-3 py-1 rounded-full text-sm font-medium`}
          >
            {status === "completed" && (
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            )}
            {status.replace(/^\w/, (c) => c.toUpperCase())}
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {schedulelesson}
            </p>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
              {scheduletitle}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {scheduledate}
            </p>
          </div>
        </div>

        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
        />
      </div>
    </Link>
  );
};

CourseDescrip.propTypes = {
  schedulelesson: PropTypes.string.isRequired,
  scheduletitle: PropTypes.string.isRequired,
  scheduledate: PropTypes.string.isRequired,
  lessonid: PropTypes.number.isRequired,
  status: PropTypes.oneOf(["completed", "current", "upcoming"]),
};

CourseDescrip.defaultProps = {
  status: "upcoming",
};

export default CourseDescrip;
