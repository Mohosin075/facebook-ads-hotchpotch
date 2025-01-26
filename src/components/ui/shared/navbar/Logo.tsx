import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="cursor-pointer">
      <Image
        width={100}
        height={100}
        alt="logo"
        className="object-cover w-14 md:w-16"
        src="https://i.ibb.co.com/X58y5kJ/ed49ac106692c8d48d005987f226611a-1.png"
      />
    </Link>
  );
};

export default Logo;
