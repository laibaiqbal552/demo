import Image from "next/legacy/image";
import React from "react";

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4 place-content-center place-items-center xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4">
      {products.map(({ id, logo, title }) => {
        return (
          <div
            key="id"
            className="flex flex-col justify-between h-full p-3 bg-white rounded-sm shadow-lg md:p-5 md:mx-0"
          >
            <div>
              <Image
                src={logo}
                alt="logo"
                width={500}
                height={500}
                className="object-cover w-full"
              />
            </div>

            <div className="mt-auto">
              <p className="w-full text-xs text-center capitalize text-ellipsis md:text-base sm:text-sm">
                {title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
const products = [
  {
    id: 1,
    logo: "/images/Nestle-Logo-2015-present.jpg",
    title: "Aramco",
  },
  {
    id: 2,
    logo: "/images/images.jpeg",
    title: "bashundhara group",
  },
  {
    id: 3,
    logo: "/images/Nestle-Logo-2015-present.jpg",
    title: "Saudiarabia ",
  },
  {
    id: 4,
    logo: "/images/Nestle-Logo-2015-present.jpg",
    title: "Saudiarabia Aramco",
  },
  {
    id: 5,
    logo: "/images/Nestle-Logo-2015-present.jpg",
    title: "Saudiarabia Aramco",
  },
  {
    id: 6,
    logo: "/images/images.jpeg",
    title: "bashundhara group",
  },
  {
    id: 7,
    logo: "/images/Nestle-Logo-2015-present.jpg",
    title: "Saudiarabia Aramco",
  },
  {
    id: 8,
    logo: "/images/Nestle-Logo-2015-present.jpg",
    title: "Saudiarabia Aramco",
  },
];
