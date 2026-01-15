import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";

const features = [
  "First venue in the world",
  "First venue in the world to have 60 multi-surface courts (20 clay + 30 hard + 10 natural grass) at one location alongside a stadium",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surfaces at one location",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First venue in the world with tennis academy, equestrian centre, 18-hole golf course, exhibition centre, Aboriginal Art & Culture Museum, stadium, 5-star Hunter Valley resort and airport all within a 500-metre radius",
  "First one-stop tennis academy in Asia Pacific",
];

function Features() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="container relative z-10 mx-auto px-5">
        <header className="grid gap-6 md:flex md:items-end md:justify-between">
          <div className="space-y-5">
            <h2 className="relative inline-block text-3xl font-semibold md:text-4xl">
              Key Features
              <span className="absolute top-0 -right-3 h-2 w-2 rounded-full bg-primary" />
            </h2>
            <p className="max-w-lg text-gray-600">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
          </div>

          <Button text="Register Now" />
        </header>
        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 lg:gap-16">
          {[0, 1].map((column) => (
            <div key={column} className="space-y-8">
              {features.map((feature, index) => (
                <FeatureCard key={`${column}-${index}`} description={feature} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute hidden sm:block  inset-0">
        <Image
          src="/images/background/features-background.png"
          alt="Features background"
          fill
          priority={false}
          className="object-cover"
        />
      </div>
    </section>
  );
}

export default Features;
