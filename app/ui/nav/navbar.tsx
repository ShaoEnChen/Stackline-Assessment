import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed z-20 w-full h-24 top-0 start-0 bg-navigation" aria-label="Navbar">
      <div className="flex flex-row h-full items-center justify-between p-6">
        <a
          className="flex items-center"
          href="/"
        >
          <Image
            src="/images/stackline_logo.svg"
            alt="Stackline Logo"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </nav>
  );
}