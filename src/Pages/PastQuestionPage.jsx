// PastQuestionPage.jsx
import PageLayout from "../Layout/PageLayout";
import DownloadCard from "../Components/DownloadCard";

const PastQuestionPage = () => {
  const materials = [
    {
      lecturer: "Prof Raji",
      title: "MEE 302: Engineering Maths",
      year: "2023",
      format: "PDF",
      size: "4.2MB",
      pages: 45,
      downloads: "1.2k+",
    },
    {
      lecturer: "Dr Ajasa",
      title: "ECE 302: Data Structure",
      year: "2022",
      format: "ZIP",
      size: "8.1MB",
      pages: 32,
      downloads: "850+",
    },
    {
      lecturer: "Dr Zubair",
      title: "ECE 307: Electricity",
      year: "2024",
      format: "PDF",
      size: "3.8MB",
      pages: 28,
      downloads: "950+",
    },
  ];

  return (
    <PageLayout>
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Past Questions Archive
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Access previous exam papers and study materials
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search past questions..."
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent">
              <option>All Departments</option>
              <option>Electrical Engineering</option>
              <option>Mechanical Engineering</option>
            </select>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <DownloadCard key={index} {...material} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PastQuestionPage;