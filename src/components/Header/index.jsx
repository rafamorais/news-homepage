import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center pt-14 pb-10">
      <Image src={logo} alt="logo - letter w" />
      <nav>
        <ul className="flex gap-11">
          <li className="menu-item">
            <Link href="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link href="/">New</Link>
          </li>
          <li className="menu-item">
            <Link href="/">Popular</Link>
          </li>
          <li className="menu-item">
            <Link href="/">Trending</Link>
          </li>
          <li className="menu-item">
            <Link href="/">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
