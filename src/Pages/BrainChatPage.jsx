import PageLayout from "../Layout/PageLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faComments, faUser, faUsers, faInfoCircle, faSignOutAlt, faPaperclip } from "@fortawesome/free-solid-svg-icons";

const BrainChatPage = () => {
  return (
    <PageLayout>
      <section className="h-screen flex flex-col">
        {/* Header Section */}
        <div className="bg-white dark:bg-gray-800 shadow-sm p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faComments} className="text-blue-600 dark:text-blue-400 text-xl" />
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              MEE 301 Study Room
              <span className="ml-2 text-sm text-green-600 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full">
                5 Online
              </span>
            </h1>
          </div>
          <button className="flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="hidden sm:inline">Leave Room</span>
          </button>
        </div>

        {/* Main Content Section */}
        <div className="flex-1 flex bg-gray-50 dark:bg-gray-900">
          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* System Message */}
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                Engr. Awwal created the room
              </div>

              {/* Sample Messages */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  AA
                </div>
                <div className="max-w-[70%]">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm text-gray-900 dark:text-white">Engr. Awwal</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">2:30 PM</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Lets start with partial fraction decomposition. Who can explain the basic concept?
                    </p>
                  </div>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-3 justify-end">
                <div className="max-w-[70%]">
                  <div className="bg-blue-600 text-white rounded-xl p-3 shadow-sm">
                    <div className="flex items-center gap-2 mb-1 justify-end">
                      <span className="text-xs text-blue-100">2:31 PM</span>
                    </div>
                    <p>Its breaking down complex rational expressions into simpler fractions!</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                  ME
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <div className="w-full mx-auto relative">
                <div className="absolute left-3 top-3 flex gap-2">
                  <button className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <FontAwesomeIcon icon={faPaperclip} />
                  </button>
                </div>
                <input
                  type="text"
                  className="w-full pl-9 pr-24 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write your message..."
                />
                <div className="absolute right-3 top-3 flex gap-2">
                  <button className="px-4 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="w-80 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hidden lg:flex flex-col">
            {/* Room Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faInfoCircle} className="text-blue-600" />
                Room Info
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Course:</span>
                  <span className="text-gray-900 dark:text-white">MEE 301</span>
                </div>
              </div>
            </div>

            {/* Tutor Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faUser} className="text-green-600" />
                Tutor
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  AA
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Engr. Awwal</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tutor</p>
                </div>
              </div>
              
            </div>

            {/* Participants */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faUsers} className="text-purple-600" />
                Participants (5)
              </h3>
              <div className="space-y-3">
                {['Al-Ameen', 'Sarah', 'Michael', 'Fatima', 'John'].map((name, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                      {name[0]}
                    </div>
                    <span className="text-gray-900 dark:text-white">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BrainChatPage;