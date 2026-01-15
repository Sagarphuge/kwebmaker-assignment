import Image from "next/image";

export default function Navbar() {
  return (
    <header className="py-4">
      <div className="container mx-auto flex items-center justify-between px-5">
        <div className="">
          <Image
            src="/images/others/logo.png"
            alt="logo"
            width={80}
            height={80}
            priority
          />
        </div>
        <button className="px-10 cursor-pointer py-3 text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-200">
          Contact Us
        </button>
      </div>
    </header>
  );
}
