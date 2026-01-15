import Image from "next/image";

type FacilitiesCardProps = {
  title: string;
  description: string;
  tags: string[];
  order: number;
  img: string;
  color?: boolean;
};

export default function FacilitiesCard({
  title,
  tags,
  description,
  img,
  order,
  color = false,
}: FacilitiesCardProps) {
  return (
    <div
      className={`space-y-6 group lg:col-span-5 ${
        order === 3 ? "lg:col-start-3" : ""
      }`}
    >
      <div className="relative overflow-hidden cursor-pointer rounded-xl h-60 sm:h-72 md:h-80 lg:h-96">
        <Image
          src={img}
          alt={title || "Facility image"}
          fill
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="#fff"
            className="bi bi-play-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
          </svg>
        </div>
      </div>

      <div className="space-y-4">
        <h3
          className={`text-2xl md:text-3xl font-medium ${
            color ? "sm:text-white" : ""
          }`}
        >
          {title}
        </h3>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1.5 rounded-full text-xs ${
                color
                  ? "sm:bg-white sm:text-gray-800 bg-[#99b81a] text-white"
                  : "bg-[#99b81a] text-white"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className={`${color ? "sm:text-white" : "text-gray-600"}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
