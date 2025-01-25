import PageLayout from "../Layout/PageLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faVideo, faFileAlt, faLightbulb, faRocket } from "@fortawesome/free-solid-svg-icons";

const AboutUsPage = () => {
  return (
    <PageLayout>
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Revolutionizing Education
            <span className="text-blue-600 dark:text-blue-400 block mt-2">The Course Correct Way</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Your all-in-one platform for academic excellence - bridging the gap between potential and success through innovative learning solutions.
          </p>
        </div>

        {/* Core Values */}
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {[
            { icon: faBookOpen, title: "Premium Resources", 
              content: "Curated materials vetted by industry experts and senior lecturers" },
            { icon: faVideo, title: "Expert Tutorials", 
              content: "1500+ HD video lessons with interactive exercises and quizzes" },
            { icon: faFileAlt, title: "Exam Archive", 
              content: "Decade-spanning past question database with smart filters" },
            { icon: faLightbulb, title: "Collaborative Learning", 
              content: "Real-time brainstorming spaces with peer-to-peer support" },
          ].map((value, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={value.icon} className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.content}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed opacity-90">
              To democratize education through accessible, high-quality resources and foster a global community of collaborative learners equipped to tackle real-world challenges.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We envision becoming the primary catalyst for innovation in Africa by 2030, empowering over 1 million students annually with the tools and community support needed to excel academically and professionally.
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="max-w-7xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "50k+", label: "Active Learners" },
              { number: "95%", label: "Pass Rate" },
              { number: "10k+", label: "Study Resources" },
            ].map((stat, index) => (
              <div key={index} className="py-6">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 uppercase text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 shadow-xl">
          <FontAwesomeIcon icon={faRocket} className="text-4xl text-white mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">Launch Your Success Journey</h3>
          <p className="text-lg text-blue-100 mb-8">
            Join 50,000+ engineering students already accelerating their academic performance
          </p>
          <a
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 font-semibold transition-all"
          >
            Start Learning Free
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUsPage;