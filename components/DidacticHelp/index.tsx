import React from "react";
import { useTranslation } from "react-i18next";
import Paragraph from "../Paragraph";
import SectionHeader from "../SectionHeader";

const DidacticHelp = () => {
  const { t } = useTranslation();

  return (
    <section id="didacticHelp" className="bg-secondary w-full">
      <SectionHeader text={t("didacticHelpHeader")} />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>IMG</div>
        <div className="md:col-start-2 md:col-span-2">
          <Paragraph
            innerHtml={
              (t("didacticHelp", { returnObjects: true }) as string[])[0]
            }
          />
          <Paragraph
            innerHtml={
              (t("didacticHelp", { returnObjects: true }) as string[])[1]
            }
          />
        </div>
        <div className="md:col-start-1 md:col-span-2">
          <Paragraph
            innerHtml={
              (t("didacticHelp", { returnObjects: true }) as string[])[2]
            }
          />
          <Paragraph
            innerHtml={
              (t("didacticHelp", { returnObjects: true }) as string[])[3]
            }
          />
        </div>
        <div>IMG</div>
        <div className="md:col-span-3">
          <Paragraph
            innerHtml={
              (t("didacticHelp", { returnObjects: true }) as string[])[4]
            }
          />
        </div>
      </div>
    </section>
  );
};

export default DidacticHelp;
