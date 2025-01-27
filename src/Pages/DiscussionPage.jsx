import PageLayout from "../Layout/PageLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowLeft, 
  faComments,
  faQuestionCircle,
  faCheckCircle,
  faMessage,
  faSearch,
  faSort,
  faVideo,
  faFilePdf,
  faThumbsUp,
  faReply
} from "@fortawesome/free-solid-svg-icons";

const DiscussionsPage = () => {
  return (
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2">
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className="hidden sm:inline">Back to Lesson</span>
              </button>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <FontAwesomeIcon icon={faComments} className="text-green-600" />
                Lesson Discussions
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Questions and conversations about "Intro to Partial Fractions"
              </p>
            </div>
          </div>

          {/* Discussion Controls */}
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-between mb-8">
            <div className="relative flex-1 max-w-xs">
              <input
                type="text"
                placeholder="Search discussions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent"
              />
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-3 top-3 text-gray-400" 
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 dark:text-gray-400">Sort by:</span>
              <select className="bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2">
                <option>Most Recent</option>
                <option>Most Popular</option>
                <option>Unanswered</option>
              </select>
            </div>
          </div>

          {/* Discussion Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            <CategoryButton
              icon={faQuestionCircle}
              label="Questions"
              count={15}
              active={true}
            />
            <CategoryButton
              icon={faMessage}
              label="Discussions"
              count={8}
            />
            <CategoryButton
              icon={faCheckCircle}
              label="Solved"
              count={6}
            />
          </div>

          {/* Discussion Threads */}
          <div className="space-y-6">
            <DiscussionThread
              userInitials="JD"
              userName="John Doe"
              time="2h ago"
              question="How do we handle repeated linear factors in partial fractions?"
              replies={4}
              upvotes={12}
              solved={false}
              category="question"
            />
            <DiscussionThread
              userInitials="AS"
              userName="Alex Smith"
              time="5h ago"
              question="Best practices for verifying partial fraction results?"
              replies={2}
              upvotes={8}
              solved={true}
              category="solved"
            />
          </div>

          {/* New Discussion Form */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Start a New Discussion
            </h2>
            <input
              type="text"
              placeholder="Discussion title"
              className="w-full mb-4 p-2 border-b border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none"
            />
            <textarea
              className="w-full p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
              rows="4"
              placeholder="Write your question or discussion topic..."
            ></textarea>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                  Attach File
                </button>
                <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  <FontAwesomeIcon icon={faVideo} className="mr-2" />
                  Add Video
                </button>
              </div>
              <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                Post Discussion
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

// Reusable Components
const CategoryButton = ({ icon, label, count, active = false }) => (
  <button className={`p-4 rounded-lg flex items-center gap-3 transition-colors ${
    active 
      ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
  }`}>
    <FontAwesomeIcon icon={icon} />
    <span>{label}</span>
    <span className="ml-auto bg-white dark:bg-gray-700 px-2 rounded-full text-sm">
      {count}
    </span>
  </button>
)

const DiscussionThread = ({ userInitials, userName, time, question, replies, upvotes, solved, category }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 ${
    solved ? 'border-l-4 border-green-600' : ''
  }`}>
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg">
        {userInitials}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="font-medium text-gray-900 dark:text-white">{userName}</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">{time}</span>
          {solved && (
            <span className="flex items-center gap-1 text-sm text-green-600">
              <FontAwesomeIcon icon={faCheckCircle} />
              Solved
            </span>
          )}
        </div>
        <p className="text-gray-900 dark:text-white text-lg mb-4">{question}</p>
        <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
          <button className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400">
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{upvotes}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400">
            <FontAwesomeIcon icon={faReply} />
            <span>{replies} replies</span>
          </button>
          <button className="ml-auto text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            Join Discussion
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default DiscussionsPage