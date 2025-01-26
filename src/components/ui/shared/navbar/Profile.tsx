import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="flex items-center gap-3 md:gap-5">
      <Link href="/sign-in">
        <button className="CBtn text-primary-light">Sign in</button>
      </Link>
      <Link href="/sign-in">
        <button className="CBtnBG">Get Started Free</button>
      </Link>

      <label
        htmlFor="my-drawer-2"
        className="drawer-button lg:hidden btn bg-primaryGray text-xl"
      >
        <FaBars />
      </label>
    </div>
  );
};

export default Profile;
