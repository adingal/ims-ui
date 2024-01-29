import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/atoms/Container";

type NavLink = {
  route: string;
  text: string;
};

type NavLinks = NavLink[];

const HeaderLinks: NavLinks = [
  {
    route: "/users",
    text: "Users",
  },
  {
    route: "/loadboard",
    text: "LoadBoard",
  },
  {
    route: "/login",
    text: "Login",
  },
];

function Header() {
  const renderHeaderLinks: React.JSX.Element[] = HeaderLinks.map(
    (link, idx) => (
      <li key={`${link}-${idx}`}>
        <Link
          className="cursor-pointer hover:underline hover:underline-offset-4"
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
                className="object-cover"
                src="/ims-logo.png"
                height={90}
                width={48}
                alt="Inventory Management System"
              />
            </Link>
          </div>
          <nav>
            <ul className="flex flex-row items-center justify-end gap-2 md:gap-3 lg:gap-4 font-sans text-xs md:text-sm lg:text-base uppercase tracking-wider font-normal text-white">
              {renderHeaderLinks}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
