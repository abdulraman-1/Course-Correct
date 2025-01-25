// CoursePage.jsx
import PageLayout from "../Layout/PageLayout";
import CourseDescrip from "../Components/CourseDescrip";
import { faBookOpen, faClock, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CoursePage = () => {
  return (
    <PageLayout>
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <nav className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="hover:text-blue-600 cursor-pointer">Courses</span> 
              <span className="mx-2">/</span>
              <span className="text-blue-600">Engineering Maths 1</span>
            </nav>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <FontAwesomeIcon icon={faBookOpen} className="text-blue-600 mr-3" />
              Engineering Maths 1
            </h1>
          </div>

          {/* Course Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
                  <FontAwesomeIcon icon={faClock} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">3 Months</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
                  <FontAwesomeIcon icon={faScaleBalanced} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Credit Units</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">3.0 CU</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Description */}
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Course Overview</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Algorithms and data structures form the foundation of computer science and software development. 
              This course introduces fundamental concepts for designing efficient algorithms and organizing data 
              for optimal storage and retrieval. Explore sorting, searching, recursion, graph traversal, and 
              essential data structures including arrays, linked lists, trees, and hash tables.
            </p>
          </div>

          {/* Course Schedule */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Course Schedule</h2>
            </div>
            
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                { lesson: "Lesson 01", title: "Intro to Partial Fraction", date: "Feb 2nd-14th", status: "completed" },
                { lesson: "Lesson 02", title: "Advanced Calculations", date: "Feb 15th-28th", status: "current" },
                // ... other lessons
              ].map((schedule, index) => (
                <CourseDescrip 
                  key={index}
                  schedulelesson={schedule.lesson}
                  scheduletitle={schedule.title}
                  scheduledate={schedule.date}
                  status={schedule.status}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default CoursePage;