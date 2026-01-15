import Image from "next/image";
import React from "react";

const SideItem = ({ label }: { label: string }) => (
  <div className="flex items-center justify-end gap-2">
    <Image src="/svg/chevron-left.svg" alt="" width={20} height={20} />
    <span className="text-xs">{label}</span>
    <hr className="w-12 border-primary" />
  </div>
);

function Hero() {
  return (
    <section className="relative grid place-content-center overflow-hidden pt-40 pb-90 sm:pb-72 lg:pb-60">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-5 text-center text-white">
        <p className="mb-2 font-medium tracking-widest">SSA HUNTER VALLEY</p>
        <h1 className="text-4xl leading-14 md:text-5xl lg:text-6xl lg:leading-20">
          GROW YOUR GAME WITH THE <br />
          <span className="border-b pb-4 font-semibold">PROFESSIONALS</span>
        </h1>
        <div className="mx-auto my-10 grid h-10 max-w-xl place-content-center bg-linear-to-r via-[#99b81a]">
          <div className="flex items-center gap-3 text-sm tracking-widest text-white/90 sm:gap-8 md:text-base">
            {["ADOPT", "NURTURE", "DELIVER"].map((word, i) => (
              <React.Fragment key={word}>
                <span>{word}</span>
                {i !== 2 && <span className="h-2 w-2 rounded-full bg-white" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <button className="rounded-full cursor-pointer border border-primary px-12 py-3 text-sm tracking-wider transition-all duration-300 hover:bg-white hover:text-black md:text-base">
          Register Now
        </button>
      </div>
      <div className="absolute bottom-10 right-0 z-10 flex flex-col gap-5 text-white">
        <SideItem label="WEATHER" />
        <div className="bg-primary-transparent   p-3">
          <p>Hunter Valley</p>
          <div className="grid grid-cols-2">
            <p className="mt-4 text-3xl font-bold">19°C</p>
            <div className="flex flex-col justify-end">
              <p className="font-semibold">Weather</p>
              <p className="text-sm">Saturday, 8 pm</p>
            </div>
          </div>
        </div>
        <SideItem label="ONGOING MATCHES" />
        <SideItem label="SCORE" />
      </div>
      <div className="absolute bottom-6 hidden sm:block left-1/2 -translate-x-1/2 z-10">
        <Image
          alt="down-arrow"
          width={40}
          height={40}
          src="svg/arrow-down.svg"
        />
      </div>
    </section>
  );
}

export default Hero;
