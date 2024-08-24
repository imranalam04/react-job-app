import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <section className="pt-40 pb-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <h1 className="text-orange-100 text-center text-8xl sm:text-9xl lg:text-10xl font-bold font-heading mb-2">
            404
          </h1>
          <p className="text-center text-2xl font-bold font-heading mb-4">
            Sorry, that page could not be found.
          </p>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            The page you are looking for was moved, removed, renamed or might
            have never existed!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              className="inline-block text-orange-500 text-sm font-semibold hover:text-orange-600 transition duration-200"
              to="/"
            >
              Back to Home
            </Link>
            <a
              className="inline-block text-orange-500 text-sm font-semibold hover:text-orange-600 transition duration-200"
              href="#"
            >
              Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notfound;
