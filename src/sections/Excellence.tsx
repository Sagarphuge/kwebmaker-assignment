import Button from "@/components/Button";
import Image from "next/image";

function Excellence() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="container relative z-10 mx-auto px-5">
        <header className="grid gap-6 md:flex md:items-end md:justify-between">
          <div className="space-y-5">
            <h2 className="relative inline-block text-3xl font-semibold md:text-4xl">
              A Glimpse of Excellence
              <span className="absolute top-0 -right-3 h-2 w-2 rounded-full bg-primary" />
            </h2>
            <p className="max-w-lg text-gray-600">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
          </div>
          <Button text="Register Now" />
        </header>

        <div className="mt-10 grid gap-8 sm:mt-12 md:mt-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="relative h-96 overflow-hidden rounded-xl sm:h-110 lg:col-span-5 lg:h-120">
            <Image
              src="/images/excellence/excellence-1.png"
              alt="Tennis training session"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>

          <div className="relative h-96 overflow-hidden rounded-xl sm:h-110 lg:col-span-7 lg:h-120">
            <Image
              src="/images/excellence/excellence-2.png"
              alt="Professional tennis courts"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
            />
          </div>
        </div>
      </div>
      <div className="absolute hidden sm:block top-0 w-full h-130">
        <Image
          src="/images/background/excellence-background.png"
          alt="Features background"
          fill
          priority={false}
          className="object-cover"
        />
      </div>
    </section>
  );
}

export default Excellence;
