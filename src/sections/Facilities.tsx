import Image from "next/image";
import FacilitiesCard from "@/components/FacilitiesCard";

const facilities = [
  {
    img: "/images/facilities/facilties-1.png",
    title: "Tennis",
    color: true,
    order: 1,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    tags: ["9 Clay Courts", "4 Hard Courts"],
  },
  {
    img: "/images/facilities/facilties-2.png",
    title: "Accommodation",
    color: true,
    order: 2,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    tags: ["5 Star Hotel"],
  },
  {
    img: "/images/facilities/facilties-3.png",
    title: "Fitness",
    order: 3,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    tags: ["Gym", "Fitness", "Room"],
  },
  {
    img: "/images/facilities/facilties-4.png",
    title: "Recovery",
    order: 4,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    tags: ["Spa", "Pool", "Massage"],
  },
];

function Facilities() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="container relative z-10 mx-auto px-5">
        <div className="max-w-md space-y-5">
          <h2 className="relative inline-block text-3xl font-semibold md:text-4xl">
            Facilities
            <span className="absolute top-0 -right-3 h-2 w-2 rounded-full bg-primary" />
          </h2>

          <p className="text-gray-600">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p>
        </div>

        <div className="mt-10 grid gap-14 sm:grid-cols-2 lg:mt-14 lg:grid-cols-12">
          {facilities.map((facility) => (
            <FacilitiesCard key={facility.title} {...facility} />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 hidden h-160 w-full -translate-y-1/2 primary-gradient sm:block">
        <div className="relative">
          <Image
            src="/images/others/facilities-tropy.png"
            alt="Trophy"
            height={600}
            width={600}
            className=" top-6  -right-70 opacity-20  absolute"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}

export default Facilities;
