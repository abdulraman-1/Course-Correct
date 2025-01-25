import PageLayout from "../Layout/PageLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBookmark, faClock, faDownload, faShare, faChevronDown, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const VideoPage = () => {
  return (
    <PageLayout>
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Video Header */}
          <div className="mb-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <nav className="flex items-center gap-2">
              <span className="hover:text-blue-600 cursor-pointer">Courses</span>
              <span>/</span>
              <span className="text-blue-600">Engineering Maths</span>
            </nav>
            <div className="flex items-center gap-4">
              <span>2.5k views</span>
              <span>•</span>
              <span>Uploaded 1 week ago</span>
            </div>
          </div>

          {/* Video Player */}
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-xl mb-8 group">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div className="text-white">
                <h1 className="text-2xl font-bold mb-2">Mastering Engineering Mathematics</h1>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faClock} />
                    45:30
                  </span>
                  <button className="flex items-center gap-1 hover:text-blue-400">
                    <FontAwesomeIcon icon={faBookmark} />
                    Bookmark
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-400">
                    <FontAwesomeIcon icon={faShare} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-3">
              {/* Author Section */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  EA
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-white">Engr. Awwal</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Senior Lecturer - Mathematics</p>
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600" />
                  What Youll Learn
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Fundamentals of partial fractions",
                    "Complex problem solving techniques",
                    "Real-world engineering applications",
                    "Time-saving strategies"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Preview */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Content Preview</h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300">
                    In this comprehensive session, well explore engineering mathematics with a focus on partial fractions. 
                    Through practical examples and step-by-step explanations, youll gain:
                  </p>
                  <ul className="space-y-2">
                    <li>Deep understanding of decomposition methods</li>
                    <li>Hands-on problem solving techniques</li>
                    <li>Application in real-world engineering scenarios</li>
                  </ul>
                  <div className="mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Key Takeaway:</h4>
                    <p>Master partial fractions to simplify complex engineering calculations</p>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  Course Content
                  <span className="text-sm text-gray-600 dark:text-gray-400">(Click to expand sections)</span>
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((section) => (
                    <details key={section} className="group">
                      <summary className="flex justify-between items-center cursor-pointer p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                        <span className="font-medium">Section {section}</span>
                        <FontAwesomeIcon icon={faChevronDown} className="transform group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-gray-700 dark:text-gray-300">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat officiis...
                        </p>
                        <div className="mt-2 text-sm text-blue-600 dark:text-blue-400 flex items-center gap-2">
                          <FontAwesomeIcon icon={faPlay} />
                          <span>0:45 - 2:30</span>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Progress */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                  <h4 className="font-semibold mb-2">Your Progress</h4>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className="w-2/3 h-full bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">45% Complete</p>
                </div>

                {/* Resources */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                  <h4 className="font-semibold mb-4">Resources</h4>
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                      <FontAwesomeIcon icon={faDownload} />
                      Lecture Notes (PDF)
                    </button>
                    <button className="w-full flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                      <FontAwesomeIcon icon={faDownload} />
                      Practice Problems
                    </button>
                  </div>
                </div>

                {/* Next Lesson */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">Next Up</h4>
                  <div className="text-sm">
                    <p className="text-gray-900 dark:text-white">Advanced Integration Techniques</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Starts in 2 days</p>
                    <button className="mt-2 w-full text-left p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg">
                      Preview Lesson →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VideoPage;