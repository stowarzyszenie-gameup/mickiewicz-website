import React from "react";
import { useTranslation } from "react-i18next";
import Paragraph from "../Paragraph";
import SectionHeader from "../SectionHeader";

const Game = () => {
  const { t } = useTranslation();

  return (
    <section id="game" className="bg-primary w-full">
      <SectionHeader text={t("gameHeader")} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>IMG</div>
        <Paragraph
          innerHtml={(t("game", { returnObjects: true }) as string[])[0]}
        />
        <div>
          <Paragraph
            innerHtml={(t("game", { returnObjects: true }) as string[])[1]}
          />
          <Paragraph
            innerHtml={(t("game", { returnObjects: true }) as string[])[2]}
          />
        </div>
        <div>IMG</div>
      </div>
    </section>
  );
};

export default Game;
