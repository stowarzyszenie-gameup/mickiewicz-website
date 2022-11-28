import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, ThemeContextType } from "../../context/theme";
import Paragraph from "../Paragraph";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { isMonochrome } = useContext(ThemeContext) as ThemeContextType;
  const [currentLogos, setCurrentLogo] = useState([
    "/images/logos/logo_black.webp",
    "/images/logos/mkin/mkin_black_pl.webp",
  ]);

  useEffect(() => {
    setCurrentLogo(selectProperLogo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMonochrome, i18n.language]);

  const selectProperLogo = () => {
    if (isMonochrome) {
      if (i18n.language === "en") {
        return [
          "/images/logos/logo_en_white.webp",
          "/images/logos/mkin/mkin_white_en.webp",
        ];
      } else {
        return [
          "/images/logos/logo_white.webp",
          "/images/logos/mkin/mkin_white_pl.webp",
        ];
      }
    } else {
      if (i18n.language === "en") {
        return [
          "/images/logos/logo_en_black.webp",
          "/images/logos/mkin/mkin_black_en.webp",
        ];
      } else {
        return [
          "/images/logos/logo_black.webp",
          "/images/logos/mkin/mkin_black_pl.webp",
        ];
      }
    }
  };
  return (
    <footer className="bg-primary dark:bg-primaryDark dark:text-white flex flex-col items-center py-12 px-8">
      <nav>MENU</nav>
      <Paragraph
        innerHtml="Gra edukacyjna Ballady i romanse powstała we współpracy z Ministerstwem
      Kultury i Dziedzictwa Narodowego."
      />
      <div className="flex justify-center items-center">
        <div className="w-1/4">
          <Link href="/">
            <Image
              src={currentLogos[0]}
              width={i18n.language === "en" ? 784 : 822}
              height={i18n.language === "en" ? 263 : 299}
              alt="logo"
            />
          </Link>
        </div>
        <div className="w-1/3">
          <Image
            src={currentLogos[1]}
            width={i18n.language === "en" ? 1358 : 1536}
            height={432}
            alt=""
          />
        </div>
      </div>
      <p className="font-serif text-sm">Astrolabe Stories © 2022</p>
    </footer>
  );
};

export default Footer;
