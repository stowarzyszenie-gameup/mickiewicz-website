import Link from "next/link";
import React from "react";

interface IProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: IProps) => {
  return (
    <li className="font-sans font-normal uppercase hover:font-bold">
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default NavLink;
