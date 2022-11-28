import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, ThemeContextType } from "../../context/theme";
import SectionHeader from "../SectionHeader";

const Bibliography = () => {
  const { t } = useTranslation();
  const { isFontLarge, isMonochrome } = useContext(
    ThemeContext
  ) as ThemeContextType;
  return (
    <section
      id="authors"
      className="bg-secondary dark:bg-secondaryDark w-11/12 font-serif text-black flex flex-col items-center"
    >
      <SectionHeader text={t("bibliographyHeader")} />
      <div
        className={`xl:max-w-screen-xl font-serif prose ${
          isFontLarge
            ? "prose-lg sm:prose-xl lg:prose-2xl"
            : "prose-base sm:prose-lg lg:prose-xl"
        } dark:prose-invert ${isMonochrome ? "text-white" : ""} text-left`}
      >
        <ul className="list-none p-0">
          {(t("bibliography", { returnObjects: true }) as string[]).map(
            (source, index) => (
              <li
                className="mb-4 p-0"
                key={`source_${index}`}
                dangerouslySetInnerHTML={{ __html: source }}
              ></li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Bibliography;
