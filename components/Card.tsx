import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4 place-content-center place-items-center xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4">
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
            <p className="w-full text-xs text-center capitalize md:text-base sm:text-sm">
              {title}
            </p>
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
    logo: "/images/images.jpeg",
    title: "bashundhara group",
  },
  {
    id: 2,
    logo: "/images/images.jpeg",
    title: "bashundhara group",
  },
  {
    id: 3,
    logo: "/images/images.jpeg",
    title: "bashundhara group",
  },
  {
    id: 4,
    logo: "/images/images.jpeg",
    title: "bashundhara group",
  },
  {
    id: 5,
    logo: "/images/images.jpeg",
    title: "bashundhara group",
  },
  {
    id: 6,
    logo: "/images/images.jpeg",
    title: "bashundhara group",
  },
  {
    id: 7,
    logo: "/images/images.jpeg",
    title: "bashundhara group",
  },
  {
    id: 8,
    logo: "/images/images.jpeg",
    title: "bashundhara group",
  },
];
