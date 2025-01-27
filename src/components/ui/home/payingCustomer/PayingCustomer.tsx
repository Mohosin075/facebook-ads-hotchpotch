import Image from "next/image";
import Link from "next/link";

const PayingCustomer = () => {
  return (
    <div className="CContainer py-24  text-center w-8/12 mx-auto">
      <h3>Trusted by nearly 5000+ paying customers</h3>
      <div>
        <div className="mt-20 flex items-center gap-5 justify-between">
          <Link href="/" className="cursor-pointer">
            <Image
              width={100}
              height={100}
              alt="logo"
              className="object-cover w-36"
              src="/images/Logo (4).png"
            />
          </Link>
          <Link href="/" className="cursor-pointer">
            <Image
              width={100}
              height={100}
              alt="logo"
              className="object-cover w-36"
              src="/images/Logo (5).png"
            />
          </Link>
          <Link href="/" className="cursor-pointer">
            <Image
              width={100}
              height={100}
              alt="logo"
              className="object-cover w-36"
              src="/images/Logo (6).png"
            />
          </Link>
          <Link href="/" className="cursor-pointer">
            <Image
              width={100}
              height={100}
              alt="logo"
              className="object-cover w-36"
              src="/images/Logo (7).png"
            />
          </Link>
        </div>
        <div className="mt-10 flex items-center gap-5 justify-between">
          <Link href="/" className="cursor-pointer">
            <Image
              width={100}
              height={100}
              alt="logo"
              className="object-cover w-36"
              src="/images/Logo (8).png"
            />
          </Link>
          <Link href="/" className="cursor-pointer">
            <Image
              width={100}
              height={100}
              alt="logo"
              className="object-cover w-36"
              src="/images/Logo (9).png"
            />
          </Link>
          <Link href="/" className="cursor-pointer">
            <Image
              width={100}
              height={100}
              alt="logo"
              className="object-cover w-36"
              src="/images/Logo (10).png"
            />
          </Link>
          <Link href="/" className="cursor-pointer">
            <Image
              width={100}
              height={100}
              alt="logo"
              className="object-cover w-36"
              src="/images/Logo (11).png"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PayingCustomer;
