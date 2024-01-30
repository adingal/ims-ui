"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/atoms/Container";

type NavLink = {
  route: string;
  text: string;
};

type NavLinks = NavLink[];

const HeaderLinks: NavLinks = [
  {
    route: "/",
    text: "LoadBoard",
  },
  {
    route: "/users",
    text: "Users",
  },
  {
    route: "/history",
    text: "History",
  },
];

function Header() {
  const pathname = usePathname();

  const renderHeaderLinks: React.JSX.Element[] = HeaderLinks.map(
    (link, idx) => (
      <li key={`${link}-${idx}`}>
        <Link
          className={`cursor-pointer hover:underline hover:underline-offset-4${
            pathname === link.route ? " underline underline-offset-4" : ""
          }`}
          href={link.route}
        >
          {link.text}
        </Link>
      </li>
    )
  );

  return (
    <header className="bg-[#13161e]">
      <Container>
        <div className="flex flex-row items-center justify-between py-2 lg:py-4">
          <div>
            <Link href="/">
              <Image
                className="hidden lg:inline-block object-cover"
                src="/ims-logo.png"
                height={90}
                width={48}
                alt="Inventory Management System"
              />
              <Image
                className="lg:hidden object-cover"
                src="/ims-logo-sm.png"
                height={58}
                width={58}
                alt="Inventory Management System"
              />
            </Link>
          </div>
          <nav>
            <ul className="flex flex-row items-center justify-end gap-2 md:gap-3 lg:gap-4 font-sans text-xs md:text-sm lg:text-base uppercase tracking-wider font-normal text-white">
              {renderHeaderLinks}
              <li>
                <Link
                  href="/login"
                  className="text-white transition-colors hover:text-gray-400 cursor-pointer"
                  title="Login"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 md:w-7 md:h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
