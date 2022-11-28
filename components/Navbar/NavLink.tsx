import Link from "next/link";
import React from "react";

interface IProps {
  href: string;
  title: string;
  onClick?: () => void;
}

const NavLink = ({ href, title, onClick }: IProps) => {
  return (
    <li
      className="font-sans font-normal uppercase hover:font-bold"
      onClick={onClick}
    >
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default NavLink;
