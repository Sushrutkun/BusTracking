"use client";
import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "@/components/ui/button";
import ThemeSwitch from "@/components/ThemeSwitch";
// import SearchBar from "./SearchBar";

// TODO: Add search bar

const Navbar = () => {
  return (
    <div className="fixed h-[60px] top-0 inset-x-0 border-b z-[10] py-2 dark:bg-black dark:text-white">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block dark:text-white">
            Bus Tracker
          </p>
        </Link>
        {/* search bar */}
        {/* <SearchBar /> */}
        <ThemeSwitch />
        {/* <Link href="/sign-in" className={buttonVariants()}>
          Sign In
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
