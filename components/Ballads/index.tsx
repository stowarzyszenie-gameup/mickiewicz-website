import Image from "next/image";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, ThemeContextType } from "../../context/theme";
import Paragraph from "../Paragraph";
import SectionHeader from "../SectionHeader";

const Ballads = () => {
  const { t } = useTranslation();
  const { isFontLarge, isMonochrome } = useContext(
    ThemeContext
  ) as ThemeContextType;
  return (
    <section
      id="ballads"
      className="bg-accent dark:bg-gray-600 w-full font-serif text-black flex flex-col items-center"
    >
      <SectionHeader text={t("gameName")} />
      <div
        className={`flex flex-col justify-start md:justify-center items-center max-w-full h-auto w-full col-span-2 ${
          isFontLarge
            ? "sm:max-w-xl md:max-w-2xl xl:max-w-7xl"
            : "sm:max-w-lg md:max-w-xl xl:max-w-6xl"
        } bg-no-repeat bg-center p-4 sm:p-0`}
      >
        <Paragraph
          innerHtml={(t("ballads", { returnObjects: true }) as string[])[0]}
        />
        <div className="w-full xl:w-2/3">
          <Image
            src="/images/biblioteczka.jpg"
            width={1920}
            height={1080}
            alt=""
          />
        </div>
        <Paragraph
          innerHtml={(t("ballads", { returnObjects: true }) as string[])[1]}
        />
        <div className="w-full xl:w-2/3">
          <Image src="/images/switez.jpg" width={1920} height={1080} alt="" />
        </div>
        <Paragraph
          innerHtml={(t("ballads", { returnObjects: true }) as string[])[2]}
        />
        <Paragraph innerHtml={t("balladsListTitle")} />
        <ul className="grid grid-cols-2 sm:grid-cols-3 list-none p-0 w-full prose">
          {(t("balladsList", { returnObjects: true }) as string[]).map(
            (item, index) => (
              <li
                className={`text-left mb-4 prose ${
                  isFontLarge
                    ? "prose-lg sm:prose-xl lg:prose-2xl"
                    : "prose-base sm:prose-lg lg:prose-xl"
                } dark:prose-invert p-0`}
                key={index}
              >
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
