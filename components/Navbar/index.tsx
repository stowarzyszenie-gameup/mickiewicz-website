import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, ThemeContextType } from "../../context/theme";
import NavLink from "./NavLink";

const Navbar = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const { isFontLarge, isMonochrome } = useContext(
    ThemeContext
  ) as ThemeContextType;

  return (
    <header className="flex sm:flex-col items-center justify-between w-full bg-primary h-28 sm:h-40 dark:bg-primaryDark text-black dark:text-white px-4">
      <Link href="/">
        {isMonochrome ? (
          <Image
            src="/images/logos/logo_white.png"
            width={200}
            height={100}
            alt="Ballads and romances logo"
          />
        ) : (
          <Image
            src="/images/logos/logo_black.png"
            width={200}
            height={100}
            alt="Ballads and romances logo"
          />
        )}
      </Link>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-black dark:text-white rounded-lg sm:hidden hover:bg-secondary dark:hover:bg-secondaryDark focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <nav
        className={`${
          showMenu ? "fixed top-20 left-0" : "hidden"
        } w-full sm:top-0 sm:relative sm:block sm:w-auto`}
        id="navbar-default"
      >
        <ul className="flex flex-col gap-4 sm:gap-2 items-center p-4 mt-4 sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium bg-primary dark:bg-primaryDark">
          <NavLink href="/#ballads" title={t("gameName")} />
          <NavLink href="/#project" title={t("projectHeader")} />
          <NavLink href="/#game" title={t("gameHeader")} />
          <NavLink href="/#didacticHelp" title={t("didacticHelpHeader")} />
          <NavLink href="/#help" title={t("contactHeader")} />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
