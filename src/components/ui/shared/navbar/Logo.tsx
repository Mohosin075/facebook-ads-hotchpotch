import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 md:gap-3 cursor-pointer">
      <Image
        width={50}
        height={50}
        alt="logo"
        className="w-10 h-10 md:w-12  md:h-12 object-cover"
        src="https://i.ibb.co.com/VJCvfwf/ed49ac106692c8d48d005987f226611a.png"
      />
      <h1 className="text-xl md:text-2xl lg:text-3xl text-primary font-bold">
        Hotchpotch
      </h1>
    </Link>
  );
};

export default Logo;
