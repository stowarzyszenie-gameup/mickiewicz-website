import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, ThemeContextType } from "../../context/theme";
import SectionHeader from "../SectionHeader";

const Ballads = () => {
  const { t } = useTranslation();
  const { isFontLarge, isMonochrome } = useContext(
    ThemeContext
  ) as ThemeContextType;
  return (
    <section className="bg-accent w-full font-serif">
      <SectionHeader text={t("gameName")} />
      <div
        id="project"
        className={`flex flex-col justify-start md:justify-center items-center max-w-full h-auto w-full col-span-2 ${
          isFontLarge ? "sm:max-w-xl md:max-w-2xl" : "sm:max-w-lg md:max-w-xl"
        } prose ${
          isFontLarge ? "prose-lg sm:prose-xl" : "prose-base sm:prose-lg"
        } dark:prose-invert ${
          isMonochrome ? "text-white" : ""
        } bg-no-repeat bg-center p-4 sm:p-0`}
      >
        {(t("ballads", { returnObjects: true }) as string[]).map(
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
    </section>
  );
};

export default Ballads;
