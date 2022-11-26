import Image from "next/image";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, ThemeContextType } from "../../context/theme";
import SectionHeader from "../SectionHeader";

const Project = () => {
  const { t } = useTranslation();
  const { isFontLarge, isMonochrome } = useContext(
    ThemeContext
  ) as ThemeContextType;

  return (
    <section id="project" className={`flex flex-col h-auto font-serif`}>
      <SectionHeader text={t("projectHeader")} />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="hidden md:block">
          <Image
            className="h-full"
            src="/images/mickiewicz_lewy_color.png"
            alt=""
            width={700}
            height={1200}
          />
        </div>
        <div
          className={`flex flex-col justify-start md:justify-center items-center max-w-full h-auto w-full col-span-2 ${
            isFontLarge ? "sm:max-w-xl md:max-w-2xl" : "sm:max-w-lg md:max-w-xl"
          } prose ${
            isFontLarge ? "prose-lg sm:prose-xl" : "prose-base sm:prose-lg"
          } dark:prose-invert ${
            isMonochrome ? "text-white" : ""
          } bg-no-repeat bg-center p-4 sm:p-0`}
        >
          {(t("project", { returnObjects: true }) as string[]).map(
            (item, index) => (
              <p
                className="text-left mb-4"
                key={index}
                dangerouslySetInnerHTML={{
                  __html: item,
                }}
              ></p>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
