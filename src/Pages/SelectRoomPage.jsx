import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageLayout from "../Layout/PageLayout";
import { faSearch, faUsers, faRocket, faClock  } from '@fortawesome/free-solid-svg-icons';

const SelectRoomPage = () => {
  const courses = [
    { code: "ECE301", title: "Electrical Engineering", participants: 12, active: "2h ago" },
    { code: "MEE401", title: "Advanced Thermodynamics", participants: 8, active: "30m ago" },
    { code: "CSE201", title: "Data Structures", participants: 15, active: "1h ago" },
    { code: "PHY101", title: "Classical Mechanics", participants: 20, active: "4h ago" },
  ];

  return (
    <PageLayout>
      <section className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
            Collaborative Learning Spaces
            <FontAwesomeIcon icon={faRocket} className="inline-block ml-3 text-blue-600" />
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join active study groups or start your own knowledge journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent">
            <option>All Departments</option>
            <option>Electrical Engineering</option>
            <option>Mechanical Engineering</option>
          </select>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {course.code}
                  </h3>
                  <p className="text-lg text-gray-800 dark:text-white">{course.title}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <FontAwesomeIcon icon={faUsers} />
                  <span>{course.participants}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faClock} />
                  <span>Active {course.active}</span>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Join Room
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create New Room CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Dont see your course? Start a new collaboration space!
          </p>
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-md transition-all flex items-center gap-2 mx-auto">
            <FontAwesomeIcon icon={faRocket} />
            Create New Room
          </button>
        </div>
      </section>
    </PageLayout>
  );
};

export default SelectRoomPage;