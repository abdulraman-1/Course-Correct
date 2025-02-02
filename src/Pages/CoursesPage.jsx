// CoursesPage.jsx
import { useState } from "react";
import PageLayout from "../Layout/PageLayout";
import CourseCard from "../Components/CourseCard";
import {
  faPlane,
  faGear,
  faComputer,
  faBook,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    { id: 1, code: "MEE 201", title: "Engineering Maths 1", icon: faGear },
    {
      id: 2,
      code: "ECE 201",
      title: "Electrical Engineering 1",
      icon: faComputer,
    },
    { id: 3, code: "ASE 201", title: "Introduction to FORTRAN", icon: faPlane },
    {
      id: 4,
      code: "ECE 202",
      title: "Electrical Engineering 1",
      icon: faComputer,
    },
    { id: 5, code: "ASE 204", title: "Introduction to FORTRAN", icon: faPlane },
    { id: 6, icon: faBook, code: "CS101", title: "Introduction to CS" },
    { id: 7, icon: faCode, code: "CS102", title: "Advanced Programming" },
  ];

  // Filter courses based on search term
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageLayout>
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Your Courses
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore and manage your enrolled courses
            </p>

            {/* Search and Filter */}
            <div className="mt-6 max-w-md mx-auto flex gap-4">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <FontAwesomeIcon
                  icon={faFilter}
                  className="text-gray-600 dark:text-gray-300"
                />
              </button>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  courseid={course.id}
                  courseicon={course.icon}
                  coursetitle={course.title}
                  coursecode={course.code}
                />
              ))
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-400 col-span-full">
                No courses found.
              </p>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CoursesPage;
