import Image from "next/image";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, ThemeContextType } from "../../context/theme";
import Paragraph from "../Paragraph";

const Hero = () => {
  const { isFontLarge, isMonochrome } = useContext(
    ThemeContext
  ) as ThemeContextType;
  const { t, i18n } = useTranslation();

  return (
    <section className="bg-white dark:bg-accentDark w-full font-serif text-black flex flex-col items-center py-4">
      <div
        className={`flex flex-col gap-4 xl:gap-8 xl:flex-row justify-start md:justify-center items-center max-w-full h-auto w-full col-span-2 ${
          isFontLarge
            ? "sm:max-w-xl md:max-w-2xl xl:max-w-7xl"
            : "sm:max-w-lg md:max-w-xl xl:max-w-6xl"
        } bg-no-repeat bg-center p-4 sm:p-0`}
      >
        <div className="xl:hidden">
          <Image
            src={
              i18n.language === "en"
                ? "/images/poster_h_en.jpg"
                : "/images/poster_h_pl.jpg"
            }
            alt="POSTER"
            width={1920}
            height={1080}
          />
        </div>
        <div className="hidden xl:block">
          <Image
            src={
              i18n.language === "en"
                ? "/images/poster_v_en.jpg"
                : "/images/poster_v_pl.jpg"
            }
            alt="POSTER"
            width={620}
            height={877}
          />
        </div>
        <div className="prose">
          <h2 className="mt-0 text-center dark:text-white">
            {t("heroHeader")}
          </h2>
          <Paragraph innerHtml={t("hero")} />
          <p>STEAM + GPLAY</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
