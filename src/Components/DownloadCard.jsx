// DownloadCard.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faDownload, faCalendar, faFileAlt, faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const DownloadCard = ({ lecturer, title, year, format, size, pages, downloads }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
            <FontAwesomeIcon icon={faFile} className="text-xl" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{lecturer}</p>
          </div>
        </div>

        {/* Metadata */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendar} className="text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{year}</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFileAlt} className="text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{format}</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faWeightHanging} className="text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{size}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-300">{pages} pages</span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200 dark:border-gray-700" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            {downloads}
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <FontAwesomeIcon icon={faDownload} />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

DownloadCard.propTypes = {
  lecturer: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
  downloads: PropTypes.string.isRequired,
};

export default DownloadCard;