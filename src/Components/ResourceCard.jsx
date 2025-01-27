import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from 'prop-types'

const ResourceCard = ({ icon, title, description, type, size, duration, color, link }) => (
  <a href={link} className="group p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
    <div className="flex items-start gap-4">
      <FontAwesomeIcon 
        icon={icon} 
        className={`${color} text-xl mt-1`} 
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {type}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {description}
        </p>
        <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          {size && <span>{size}</span>}
          {duration && <span>{duration}</span>}
          <span className="ml-4 text-blue-600 dark:text-blue-400 hover:underline">
            {type === 'WEB' ? 'Visit' : 'Download'}
          </span>
        </div>
      </div>
    </div>
  </a>
)

ResourceCard.propTypes = {
    /** FontAwesome icon object */
    icon: PropTypes.object.isRequired,
    
    /** Resource title */
    title: PropTypes.string.isRequired,
    
    /** Short description of the resource */
    description: PropTypes.string.isRequired,
    
    /** Type of resource (PDF, PPTX, WEB, etc.) */
    type: PropTypes.string.isRequired,
    
    /** File size for downloadable resources */
    size: PropTypes.string,
    
    /** Duration for video resources */
    duration: PropTypes.string,
    
    /** Tailwind text color class for the icon */
    color: PropTypes.string.isRequired,
    
    /** URL for the resource link */
    link: PropTypes.string.isRequired
  };

export default ResourceCard