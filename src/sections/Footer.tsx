import Image from "next/image";
import Link from "next/link";

function Footer() {
  const footerLinks = [
    "About Us",
    "Coaches",
    "News",
    "Matches",
    "Events",
    "FAQs",
    "Programs",
    "Amenities",
    "Blogs",
  ];
  return (
    <footer>
      <section className="py-16 lg:py-20">
        <div className="container mx-auto grid gap-10 px-5 md:grid-cols-12">
          <div className="md:col-span-4 flex items-center">
            <Image
              width={120}
              height={120}
              src="/images/others/logo.png"
              alt="logo"
            />
          </div>
          <div className="md:col-span-8 space-y-10">
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
                {footerLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="hover:underline underline-offset-4"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <hr className="opacity-20" />

            <div className="grid gap-10 md:grid-cols-2">
              <div className="not-italic space-y-5">
                <h3 className="text-xl font-medium text-primary">
                  Signature Slam Academy
                </h3>

                <p>30 Wills Hill Road, Lovedale, NSW</p>

                <div className="flex  items-center gap-3">
                  <Image
                    src="/svg/phone.svg"
                    alt="Phone"
                    width={20}
                    height={20}
                  />
                  <Link
                    href="tel:+915642589752"
                    className="hover:underline underline-offset-4"
                  >
                    +91 56425 89752
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <Image
                    src="/svg/mail.svg"
                    alt="Phone"
                    width={20}
                    height={20}
                  />

                  <Link
                    href="mailto:info@ssagroup.com"
                    className="hover:underline underline-offset-4"
                  >
                    info@ssagroup.com
                  </Link>
                </div>
              </div>

              <section aria-labelledby="social-heading" className="space-y-5">
                <h3
                  id="social-heading"
                  className="text-xl font-medium text-primary"
                >
                  Connect with us
                </h3>

                <ul className="flex gap-5">
                  <li>
                    <Link href="/">
                      <Image
                        width={24}
                        height={24}
                        src="/svg/facebook.svg"
                        alt="logo"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <Image
                        width={24}
                        height={24}
                        src="/svg/twitter.svg"
                        alt="logo"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <Image
                        width={24}
                        height={24}
                        src="/svg/instagram.svg"
                        alt="logo"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <Image
                        width={24}
                        height={24}
                        src="/svg/youtube.svg"
                        alt="logo"
                      />
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="primary-gradient py-4 text-sm text-white">
        <div className="container mx-auto px-5 space-y-4 sm:grid  sm:grid-cols-2 sm:space-y-0 lg:flex lg:justify-between">
          <Link href="/" className="hover:underline block underline-offset-4">
            Terms and Conditions
          </Link>

          <Link
            href="/"
            className="hover:underline underline-offset-4 block sm:text-end lg:order-2"
          >
            Privacy Policy
          </Link>

          <p className="sm:col-span-2 mt-4 lg:mt-0 border-t border-white/30 pt-4 lg:border-none lg:pt-0 sm:text-center">
            © 2023 All Rights Reserved www.signatureslamacademy.com
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
