import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-4 place-content-center place-items-center xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4">
      {products.map(({ id, logo, title }) => {
        return (
          <div
            key="id"
            className="p-3 bg-white rounded-sm shadow-lg md:p-5 md:mx-0"
          >
            <Image
              src={logo}
              alt="logo"
              width="400"
              height="400"
              className="mb-8"
            />
            <p className="w-full text-center capitalize">{title}</p>
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
    title: "lifebuoy",
  },
  {
    id: 2,
    logo: "/images/Nestle-Logo-2015-present.jpg",
    title: "nestle",
  },
  {
    id: 3,
    logo: "/images/Nestle-Logo-2015-present.jpg",
    title: "toyota",
  },
  {
    id: 4,
    logo: "/images/Nestle-Logo-2015-present.jpg",
    title: "MI",
  },
  {
    id: 5,
    logo: "/images/Nestle-Logo-2015-present.jpg",
    title: "MI",
  },
  {
    id: 6,
    logo: "/images/Nestle-Logo-2015-present.jpg",
    title: "MI",
  },
  {
    id: 7,
    logo: "/images/Nestle-Logo-2015-present.jpg",
    title: "MI",
  },
  {
    id: 8,
    logo: "/images/Nestle-Logo-2015-present.jpg",
    title: "MI",
  },
];
