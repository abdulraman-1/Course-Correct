import PageLayout from "../Layout/PageLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faFilePdf, faComments, faBookOpen, faLightbulb, faNoteSticky } from "@fortawesome/free-solid-svg-icons";

const LessonPage = () => {
  return (
    <PageLayout>
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2">
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className="hidden sm:inline">Back to Course</span>
              </button>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span>Progress: 25%</span>
                <div className="w-32 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-1">
                  <div className="w-1/4 h-full bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <nav className="text-sm text-gray-600 dark:text-gray-400">
                <span className="hover:text-blue-600 cursor-pointer">Engineering Maths 1</span>
                <span className="mx-2">/</span>
                <span className="text-blue-600">Lesson 01</span>
              </nav>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <FontAwesomeIcon icon={faBookOpen} className="text-blue-600" />
                Intro to Partial Fractions
              </h1>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
            <button className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg font-medium">
              Lesson Content
            </button>
            <button className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg">
              Resources
            </button>
            <button className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg">
              Discussions
            </button>
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
            {/* Key Concepts */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon icon={faLightbulb} className="text-blue-600 text-xl" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Key Concepts</h2>
              </div>
              <div className="space-y-4 pl-10">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mt-1">1</div>
                  <p className="text-gray-600 dark:text-gray-400">Definition and purpose of partial fractions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mt-1">2</div>
                  <p className="text-gray-600 dark:text-gray-400">Step-by-step decomposition process</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mt-1">3</div>
                  <p className="text-gray-600 dark:text-gray-400">Practical applications in engineering</p>
                </div>
              </div>
            </div>

            {/* Detailed Notes */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon icon={faNoteSticky} className="text-blue-600 text-xl" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Detailed Explanation</h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Partial fraction decomposition is essential for simplifying complex rational expressions. 
                  The process involves breaking down a complicated fraction into a sum of simpler fractions, 
                  making integration and other operations more manageable.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Example Process:</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Factorize the denominator completely</li>
                    <li>Set up partial fraction decomposition form</li>
                    <li>Solve for unknown coefficients</li>
                    <li>Verify solution through recombination</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="/materials/lesson01.pdf" className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faFilePdf} className="text-red-600" />
                    <span className="text-gray-900 dark:text-white">Lesson Notes.pdf</span>
                  </div>
                </a>
                <a href="/videos/lesson01" className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faFilePdf} className="text-blue-600" />
                    <span className="text-gray-900 dark:text-white">Video Tutorial.mp4</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Discussion Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FontAwesomeIcon icon={faComments} className="text-green-600" />
              Discussion Forum
            </h2>
            
            {/* Existing Comments */}
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">JD</div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">John Doe</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">How do we handle repeated linear factors in partial fractions?</p>
              </div>
            </div>

            {/* Comment Form */}
            <textarea
              className="w-full p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
              rows="4"
              placeholder="Ask a question or contribute to the discussion..."
            ></textarea>
            <div className="mt-4 flex justify-end">
              <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2">
                <FontAwesomeIcon icon={faComments} />
                Post Comment
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span className="hidden sm:inline">Previous Lesson</span>
            </button>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center">
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default LessonPage