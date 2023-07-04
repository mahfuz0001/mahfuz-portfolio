import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="inline px-0 py-8 text-center text-2xl font-semibold text-blue-300 opacity-60">
      <div className="pt-12">
        <Link href="/" className="navLinks">
          Home
        </Link>
        <Link href="/projects" className="navLinks">
          Projects
        </Link>
        <Link href="/donate" className="navLinks">
          Donate
        </Link>
        <Link href="/contact" className="navLinks">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
