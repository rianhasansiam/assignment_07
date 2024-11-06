import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div className="bg-black ">
      <div className="container mx-auto relative py-24  pt-60 lg:px-4">
        <div className=" border-white bg-[#ffffff42] border-2 rounded-3xl md:w-[70%] w-[80vw] mx-auto p-3 absolute -top-[200px] md:left-[15%] left-[10%]">
          <div className="footer-bg bg-white rounded-3xl md:py-24 py-16">
            <h1 className="text-center font-bold text-lg lg:text-4xl md:text-3xl md:py-5 py-0">
              Subscribe to our Newsletter
            </h1>
            <p className="text-center text-gray-500 md:pb-10 pb-5">
              Get the lastest Update and news right in your inbox!
            </p>

            <div className="flex gap-5 lg:w-[550px] mx-auto flex-col md:flex-row w-[90%]">
              <label className="input input-bordered flex  items-center gap-2 w-full ">
                <input
                  type="email"
                  className="grow"
                  placeholder="Inter your email"
                />
              </label>

              <button className=" btn lg:w-[150px] bg-gradient-to-r from-[#d36ff2] to-[#e29416]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div>
          <img className="mx-auto" src="./assets/logo-footer.png" alt="" />
        </div>
        <div className="grid md:grid-cols-3 max-sm:w-[90vw] mx-auto py-10 pb-5  ">
          <ul>
            <li className="font-semibold text-lg py-3 text-white">About Us</li>
            <li className="text-gray-500">We are a passionate team </li>
            <li className="text-gray-500">dedicated to providing the best </li>
            <li className="text-gray-500">services to our customers.</li>
          </ul>

          <ul className="">
            <li className="font-semibold text-lg py-3 text-white">
              Quick Links
            </li>
            <li className="list-disc text-gray-500">Home </li>
            <li className="list-disc text-gray-500">Services </li>
            <li className="list-disc text-gray-500">About</li>
          </ul>

          <div>
            <h3 className="font-semibold text-lg py-3 text-white">Subscribe</h3>
            <p className="text-gray-500">
              Subscribe to our newsletter for the latest updates.
            </p>

            <div className="flex flex-col py-5  lg:flex-row   ">
              <label className="input input-bordered flex items-center gap-2 w-full lg:rounded-r-none ">
                <input
                  type="email"
                  className="grow"
                  placeholder="Inter your email"
                />
              </label>

              <button className=" btn  bg-gradient-to-r from-[#d36ff2] to-[#e29416] lg:rounded-l-none  border-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider bg-white h-[0.1px] p-0 m-0"></div>

      <span className=" mx-auto block text-center py-5 text-gray-300">
        @2024 Your Company All Rights Reserved.
      </span>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
