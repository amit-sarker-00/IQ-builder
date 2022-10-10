import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                EveryThing You Can
                <br className="hidden md:block" />
                Imagine{" "}
                <span className="inline-block text-purple-600">Is Real</span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                An IQ test is an assessment that measures a range of cognitive
                abilities and provides a score that is intended to serve as a
                measure of an individual's intellectual abilities and potential.
              </p>
            </div>
            <div>
              <Link
                to="#"
                className=" p-4 border text-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-black  rounded shadow-md md:w-auto md:mr-4 md:mb-0 focus:shadow-outline focus:outline-none"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
