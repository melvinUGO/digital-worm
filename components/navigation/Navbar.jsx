"use client";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useNavGlobalContext } from "@/contexts/navigaionContext";
import logo from "/public/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { openSidebar } = useNavGlobalContext();
  const pathname = usePathname();

  return (
    <nav>
      <div className=" center flex justify-between items-center p-5 sm:py-[36px] sm:px-[70px] bg-[#FFF]">
        <div className="relative w-[70px] h-[25px] sm:w-[155px] sm:h-[55px]">
          <Image src={logo} fill className="object-contain" priority />
        </div>
        <div className="hidden sm:block space-x-[42px]">
          <Link
            href="/"
            className={`${
              pathname === "/" ? " text-[#7a7a7a]" : " text-black"
            }`}
          >
            Home
          </Link>
          <Link
            href="/aboutUs"
            className={`${
              pathname === "/aboutUs" ? " text-[#7a7a7a]" : " text-black"
            }`}
          >
            About us
          </Link>
          <Link
            href="/projects"
            className={`${
              pathname === "/projects" ? " text-[#7a7a7a]" : " text-black"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contactUs"
            className={`${
              pathname === "/contactUs" ? " text-[#7a7a7a]" : " text-black"
            }`}
          >
            Contact us
          </Link>
        </div>
        <button
          type="button"
          className="sm:hidden text-[1.2rem]"
          onClick={openSidebar}
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
