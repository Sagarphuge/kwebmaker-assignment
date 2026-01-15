import Image from "next/image";

const locations = [
  { name: "Hunter Valley Golf And Country Club", distance: "220m" },
  { name: "Rydges Resort Hunter Valley", distance: "550m" },
  { name: "Cressnock Airport", distance: "1.7km" },
  { name: "Cressnock CBD", distance: "7km" },
  { name: "Nulkaba Public School", distance: "4.8km" },
  { name: "Cressnock Hospital", distance: "7.3km" },
  { name: "McDonalds, KFC, Oporto", distance: "7km" },
];

export default function Launching() {
  return (
    <section className="grid max-w-384 mx-auto my-20 md:grid-cols-2">
      <div className="md:order-1">
        <Image
          src="/images/others/launching.png"
          alt="Signature Slam Academy Hunter Valley"
          width={770}
          height={790}
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" launching-gradient px-5 py-14 text-white lg:px-16 xl:p-24">
        <h6 className="font-light">LAUNCHING</h6>
        <h1 className="mt-8 mb-6 text-3xl font-semibold md:text-4xl">
          Signature Slam Academy Hunter Valley
        </h1>
        <h6 className="font-medium text-xl">SSA Connectivity</h6>

        <div className="mt-12 space-y-8">
          {locations.map((loc, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex items-center gap-3 sm:w-auto">
                <Image src="/svg/flag.svg" width={20} height={20} alt="flag" />
                <div className="w-36 font-medium sm:w-fit">{loc.name}</div>
              </div>
              <hr className="flex-1 border-t border-dashed" />
              <div className="w-10 text-end sm:w-fit">{loc.distance}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
