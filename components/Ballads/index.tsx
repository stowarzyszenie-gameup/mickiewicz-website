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
    <section
      id="ballads"
      className="bg-white w-full font-serif text-black flex flex-col items-center"
    >
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
        <p
          className="text-left mb-0 w-full"
          dangerouslySetInnerHTML={{ __html: t("balladsListTitle") }}
        ></p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 text-sm list-none p-0 w-full">
          {(t("balladsList", { returnObjects: true }) as string[]).map(
            (item, index) => (
              <li className="text-left mb-4" key={index}>
                &ldquo;{item}&rdquo;
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Ballads;
