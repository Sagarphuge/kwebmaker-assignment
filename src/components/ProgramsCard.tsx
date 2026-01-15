import Image from "next/image";

type ProgramsCardProps = {
  programName: string;
  programDescription: string;
  imgUrl: string;
};

export default function ProgramsCard({
  programName,
  programDescription,
  imgUrl,
}: ProgramsCardProps) {
  return (
    <article className="group relative h-96 lg:h-120 cursor-pointer overflow-hidden rounded-xl">
      <Image
        src={imgUrl}
        alt={programName}
        fill
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               33vw"
      />

      <div className="pointer-events-none absolute bottom-6 w-full space-y-1 text-center text-white">
        <h6 className="text-2xl font-medium">{programName}</h6>
        <p className="text-sm">{programDescription}</p>
      </div>
    </article>
  );
}
