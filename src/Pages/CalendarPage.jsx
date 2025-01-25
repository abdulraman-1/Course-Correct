import PageLayout from "../Layout/PageLayout";
import Calendar from "../Components/Calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const CalendarPage = () => {
  // Sample events data
  const events = [
    { date: '2024-03-15', title: 'MEE 201 Exam', type: 'exam' },
    { date: '2024-03-20', title: 'ECE 201 Lab Due', type: 'assignment' },
    { date: '2024-03-22', title: 'Project Presentation', type: 'event' },
  ];

  return (
    <PageLayout>
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <FontAwesomeIcon icon={faCircle} className="text-blue-600 text-sm" />
                Harmatan Semester 2024
              </h1>
            </div>
          </div>

          {/* Calendar Section */}
          <Calendar />

          {/* Legend & Quick Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Legend</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Current Day</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-100 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Exams</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-100 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Assignments</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Upcoming Deadlines</h3>
              <div className="space-y-4">
                {events.slice(0, 3).map((event, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{event.title}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Mar {event.date.split('-')[2]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Semester Progress</h3>
              <div className="flex items-center gap-3">
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                  <div className="w-2/3 h-full bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">65%</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">12/18 weeks completed</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default CalendarPage;