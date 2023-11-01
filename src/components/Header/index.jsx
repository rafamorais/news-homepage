import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRef, useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const responsiveMenu = useRef();
  const openNav = () => {
    responsiveMenu.current.style.width = "65%";
    setIsActive(true);
  };
  const closeNav = () => {
    responsiveMenu.current.style.width = "0%";
    setIsActive(false);
  };

  return (
    <header className="container mx-auto mt-8 mb-8">
      <div className="flex flex-col sm:items-center justify-between sm:flex-row">
        <div className="flex items-center justify-between">
          <Image src={logo} alt="logo - letter " className="" />
          <span onClick={openNav} className="block sm:hidden">
            <AiOutlineMenu className="text-[22px]" />
          </span>
        </div>
        <nav className={`hidden sm:block `}>
          <ul className="flex flex-col sm:flex-row sm:gap-11">
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

      {/* Mobile Menu - open */}
      <div
        onClick={closeNav}
        className={`${
          isActive ? "w-full " : "w-0 "
        } fixed overflow-x-hidden h-screen right-0 top-0 flex justify-end bg-[#000]/[.6]`}
      />

      <div
        ref={responsiveMenu}
        className="bg-white h-screen top-0 right-0 transition-all duration-700 w-0 fixed"
      >
        <div
          className={`${
            isActive ? "block " : "hidden "
          } absolute top-8 right-4 `}
        >
          <span onClick={closeNav} className="">
            <AiOutlineClose className="text-4xl" />
          </span>
        </div>

        <nav className={`responsive-menu px-4 relative top-[15%]`}>
          <ul className="flex flex-col gap-7">
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
      {/* Mobile Menu - open */}
    </header>
  );
};

export default Header;
