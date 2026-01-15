import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 text-white lg:py-24">
      <Image
        src="/images/others/testimoinal-banner.png"
        alt="Tennis performance center testimonial background"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-white/60" />
      <div className="relative z-10 mx-auto max-w-3xl space-y-6 px-5">
        <blockquote className="text-2xl font-medium leading-snug md:text-3xl">
          “We have created an environment ideal for building craft. Our goal is
          to be recognized as the best tennis performance centre in the world.”
        </blockquote>

        <hr className="border-white/40" />

        <footer className="space-y-1">
          <h6 className="text-lg font-semibold">John Doe</h6>
          <p className="text-sm opacity-90">Chairman</p>
        </footer>
      </div>
    </section>
  );
}
