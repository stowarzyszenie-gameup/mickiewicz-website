import Image from "next/image";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, ThemeContextType } from "../../context/theme";
import Paragraph from "../Paragraph";
import SectionHeader from "../SectionHeader";

const Game = () => {
  const { t } = useTranslation();
  const { isFontLarge, isMonochrome } = useContext(
    ThemeContext
  ) as ThemeContextType;

  return (
    <section
      id="game"
      className="bg-primary dark:bg-accentDark w-full flex flex-col items-center "
    >
      <SectionHeader text={t("gameHeader")} />
      <div
        className={`grid grid-cols-1 xl:grid-cols-2 xl:gap-8 max-w-full h-auto w-full col-span-2 ${
          isFontLarge
            ? "sm:max-w-xl md:max-w-2xl xl:max-w-7xl"
            : "sm:max-w-lg md:max-w-xl xl:max-w-6xl"
        } bg-no-repeat bg-center p-4 sm:p-0"`}
      >
        <div>
          <Image src="/images/kowno.jpg" width={960} height={540} alt="" />
        </div>
        <div className="flex items-center">
          <Paragraph
            innerHtml={(t("game", { returnObjects: true }) as string[])[0]}
          />
        </div>
        <div className="flex flex-col justify-center">
          <Paragraph
            innerHtml={(t("game", { returnObjects: true }) as string[])[1]}
          />
          <Paragraph
            innerHtml={(t("game", { returnObjects: true }) as string[])[2]}
          />
        </div>
        <div>
          <Image src="/images/czarcidom.jpg" width={960} height={540} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Game;
