import Image from "next/image";

export default function Navbar() {
  return (
    <header className="py-3">
      <div className="container mx-auto  px-5">
        <div className="">
          <Image
            src="/images/others/logo.png"
            alt="logo"
            width={80}
            height={80}
            priority
          />
        </div>
      </div>
    </header>
  );
}
