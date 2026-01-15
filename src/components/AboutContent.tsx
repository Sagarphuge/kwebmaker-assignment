"use client";

import Image from "next/image";
import Button from "./Button";

const stats = [
  { value: "20", label: "Courts" },
  { value: "12", label: "Coaches" },
  { value: "17", label: "Years" },
  { value: "10", label: "Clubs" },
];

const images = [
  {
    src: "/images/about/about-1.png",
    col: "col-span-7",
    alt: "Tennis court 1",
  },
  {
    src: "/images/about/about-2.png",
    col: "col-span-5",
    alt: "Tennis court 2",
  },
  {
    src: "/images/about/about-3.png",
    col: "col-span-6",
    alt: "Tennis court 3",
  },
  {
    src: "/images/about/about-4.png",
    col: "col-span-6",
    alt: "Tennis court 4",
  },
];

export default function AboutContent() {
  return (
    <div className="grid items-center gap-16 lg:gap-36 md:grid-cols-2">
      <div className="space-y-6">
        <h2 className="relative inline-block text-3xl font-semibold md:text-4xl">
          About Us
          <span className="absolute -right-3 top-0 h-2 w-2 rounded-full bg-primary" />
        </h2>

        <p className="text-gray-600">
          To be the first venue in the world to have 60 multi surface courts at
          one location and establish the first one-stop tennis academy in the
          Asia Pacific producing grand slam champions.
        </p>

        <div className="my-10 grid grid-cols-2 gap-10 sm:flex sm:justify-between">
          {stats.map(({ value, label }) => (
            <div key={label} className="sm:text-center">
              <p className="text-3xl font-bold text-primary sm:text-4xl">
                {value}
              </p>
              <p className="text-sm text-gray-600 sm:text-base">{label}</p>
            </div>
          ))}
        </div>

        <Button text="Register Now" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {images.map(({ src, col, alt }, i) => (
          <div
            key={i}
            className={`${col} h-48 overflow-hidden md:h-60 relative`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
