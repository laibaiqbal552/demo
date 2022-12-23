import React from "react";
import { GoSearch } from "react-icons/go";
import Card from "../components/Card";
const Index = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-200">
      <div className="container mx-auto mb-8 lg:mb-12 ">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 sm:justify-between md:flex-nowrap">
          <p className="text-xl font-semibold text-gray-900 ">Shop by Brands</p>
          <div className="flex items-center ">
            <input
              type="search"
              placeholder="Search..."
              className="px-2 border-0 rounded-l-md h-9 focus:outline-none"
            />
            <button className="flex items-center justify-center w-16 text-white bg-gray-900 border-0 sm:w-20 h-9 rounded-r-md ">
              <GoSearch className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto ">
        <Card />
      </div>
    </div>
  );
};

export default Index;
