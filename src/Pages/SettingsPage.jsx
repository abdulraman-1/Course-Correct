import PageLayout from "../Layout/PageLayout";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faBell, faMoon, faGlobe } from "@fortawesome/free-solid-svg-icons";

const SettingsPage = () => {
  return (
    <PageLayout>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8 text-center lg:text-left">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Account Settings</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Manage your profile, security, and preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Sidebar */}
          <div className="w-full lg:w-64 flex flex-col gap-2">
            <button className="flex items-center gap-3 p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200">
              <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
              <span>Profile</span>
            </button>
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
              <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
              <span>Notifications</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Profile Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-2xl font-semibold text-gray-500 dark:text-gray-400">
                    P
                  </div>
                  <button className="absolute bottom-0 right-0 bg-white dark:bg-gray-700 p-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    <FontAwesomeIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">John Doe</h2>
                  <p className="text-gray-600 dark:text-gray-400">john@example.com</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter username"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter email"
                  />
                </div>
                <button className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Security Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Password Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                </div>
                <div className="pt-4">
                  <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Update Password
                  </button>
                </div>
              </div>
            </div>

            {/* Preferences Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faMoon} className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only" />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 rounded-full transition-colors peer-checked:bg-blue-600"></div>
                    <div className="absolute left-1 top-1 bg-white dark:bg-gray-300 w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
                  </label>
                </div>
                
                <div className="p-3">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faGlobe} className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
};

export default SettingsPage;