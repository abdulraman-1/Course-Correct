import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      {/* Icon or Illustration */}
      <div className="text-9xl font-bold text-blue-500">404</div>
      <h1 className="text-3xl font-semibold mt-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 text-center">
        {`Oops! The page you're looking for doesn't exist.`} <br />
        {`It might have been moved or deleted.`}
      </p>

      {/* Navigation Options */}
      <div className="mt-6">
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Go Back Home
        </Link>
      </div>

      {/* Decorative Divider */}
      <div className="mt-10 h-[1px] w-1/2 bg-gray-300 dark:bg-gray-600"></div>

      {/* Additional Links */}
      <div className="mt-6 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          Need help? <Link to="/contact" className="text-blue-500 underline">Contact Us</Link>
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
