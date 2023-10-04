import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <header className="container mx-auto pt-14 md:pb-10 mb-5">
      <div className="flex flex-col md:items-center justify-between md:flex-row">
        <div className="flex items-center justify-between">
          <Image src={logo} alt="logo - letter " className="" />
          <span onClick={handleClick} className="block md:hidden">
            <AiOutlineMenu className="text-[22px]" />
          </span>
        </div>
        <nav
          className={` ${isActive ? "block" : "hidden"} mt-4 md:mt-0 md:block `}
        >
          <ul className="flex flex-col md:flex-row md:gap-11">
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
    </header>
  );
};

export default Header;
