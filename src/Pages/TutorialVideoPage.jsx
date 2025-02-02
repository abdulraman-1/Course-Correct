import PageLayout from "../Layout/PageLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faClock,
  faArrowRight,
  faSearch,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TutorialVideoPage = () => {
  return (
    <PageLayout>
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Master Course Concepts
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Visual learning through expert-curated video tutorials
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center gap-2">
                <FontAwesomeIcon icon={faFilter} />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "ECE 301: Engineering Maths 4",
                duration: "12:45",
                category: "Mathematics",
                thumbnail: "src/images/video1.jpg",
              },
              {
                title: "ECE 301: Engineering Maths 4",
                duration: "12:45",
                category: "Mathematics",
                thumbnail: "src/images/video1.jpg",
              },
              {
                title: "ECE 301: Engineering Maths 4",
                duration: "12:45",
                category: "Mathematics",
                thumbnail: "src/images/video1.jpg",
              },
              {
                title: "ECE 301: Engineering Maths 4",
                duration: "12:45",
                category: "Mathematics",
                thumbnail: "src/images/video1.jpg",
              },
              // Add other video objects
            ].map((video, index) => (
              <Link
                to={`/tutorialvideo/${index + 1}`}
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden rounded-t-xl">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="text-white text-4xl"
                    />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-gray-900/80 text-white text-sm px-2 py-1 rounded-md flex items-center gap-1">
                    <FontAwesomeIcon icon={faClock} className="text-sm" />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      {video.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {video.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex justify-center">
            <a
              href="/explore"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Explore All Videos
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TutorialVideoPage;
