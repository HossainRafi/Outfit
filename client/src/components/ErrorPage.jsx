import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-2xl font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-xl leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for !
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="btn"
          >
            Back To Home
          </Link>
          <Link to="/contact" className="btn">
            Get Support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
