import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="mx-auto grid max-w-384 text-white md:grid-cols-2">
      <article
        className={
          "relative bg-[url('/images/banner/banner-1.png')] bg-cover px-5 py-10 md:px-10 md:py-16 lg:px-20 xl:px-32 bg-center bg-no-repeat"
        }
      >
        <div className="space-y-5">
          <h2 className="relative inline-block text-3xl font-semibold md:text-4xl">
            Our Coaches
            <span className="absolute top-0 -right-3 h-2 w-2 rounded-full bg-white" />
          </h2>
          <p className="max-w-sm text-white/90">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-medium hover:underline underline-offset-4"
          >
            Read More
            <Image src="/svg/white-arrow.svg" alt="" width={24} height={24} />
          </Link>
        </div>
      </article>
      <article
        className={
          "relative bg-primary px-5 py-10 md:px-10 md:py-16 lg:px-20 xl:px-32"
        }
      >
        <div className="relative z-10 space-y-5">
          <h2 className="relative inline-block text-3xl font-semibold md:text-4xl">
            Events
            <span className="absolute top-0 -right-3 h-2 w-2 rounded-full bg-white" />
          </h2>

          <p className="max-w-sm">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 font-medium hover:underline underline-offset-4"
          >
            Read More
            <Image src="/svg/white-arrow.svg" alt="" width={24} height={24} />
          </Link>
        </div>

        <Image
          src="/images/banner/banner-2.png"
          alt="tennis-player"
          width={320}
          height={240}
          className="absolute bottom-0 right-0 h-48 w-auto lg:h-60"
        />
      </article>
    </section>
  );
}
