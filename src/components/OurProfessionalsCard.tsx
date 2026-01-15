import Image from "next/image";

type OurProfessionalsProps = {
  profileName: string;
  profileDescription: string;
  imgUrl: string;
};

export default function OurProfessionalsCard({
  profileName,
  profileDescription,
  imgUrl,
}: OurProfessionalsProps) {
  return (
    <article className="group cursor-pointer space-y-6">
      <div className="relative h-90 sm:h-96 lg:h-100 overflow-hidden rounded-xl">
        <Image
          src={imgUrl}
          alt={profileName}
          fill
          className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 33vw"
        />
      </div>

      <div className="space-y-2">
        <h6 className="text-2xl font-medium leading-tight">{profileName}</h6>
        <p className="max-w-xs text-gray-600 italic">{profileDescription}</p>
      </div>
    </article>
  );
}
