import Image from "next/image";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, ThemeContextType } from "../../context/theme";
import Paragraph from "../Paragraph";
import SectionHeader from "../SectionHeader";

const Project = () => {
  const { t } = useTranslation();
  const { isFontLarge, isMonochrome } = useContext(
    ThemeContext
  ) as ThemeContextType;

  return (
    <section
      id="project"
      className={`flex flex-col w-11/12 h-auto font-serif items-center text-black dark:text-white`}
    >
      <SectionHeader text={t("projectHeader")} />
      <div className="grid grid-cols-1 md:grid-cols-3 xl:max-w-screen-xl">
        <div className="hidden md:flex">
          <Image
            className="h-full"
            src="/images/mickiewicz.webp"
            alt=""
            width={700}
            height={1200}
          />
        </div>
        <div
          className={`flex flex-col justify-start md:justify-center items-start max-w-full h-auto w-full col-span-2 ${
            isFontLarge
              ? "sm:max-w-xl md:max-w-2xl xl:max-w-7xl"
              : "sm:max-w-lg md:max-w-xl xl:max-w-6xl"
          } bg-no-repeat bg-center p-4 sm:p-0 self-center`}
        >
          {(t("project", { returnObjects: true }) as string[]).map(
            (item, index) => (
              <Paragraph innerHtml={item} key={index} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
