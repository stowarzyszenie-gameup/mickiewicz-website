import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import Paragraph from "../Paragraph";
import SectionHeader from "../SectionHeader";

const DidacticHelp = () => {
  const { t } = useTranslation();

  return (
    <section
      id="didacticHelp"
      className="bg-secondary dark:bg-secondaryDark w-11/12 font-serif text-black flex flex-col items-center"
    >
      <SectionHeader text={t("didacticHelpHeader")} />
      <div className="grid grid-cols-1 md:grid-cols-3 xl:max-w-screen-xl">
        <div className="hidden md:flex">
          <Image src="/images/blazej.webp" width={1094} height={2093} alt="" />
        </div>
        <div className="md:col-start-2 md:col-span-2 flex flex-col justify-center">
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
        <div className="md:col-start-1 md:col-span-2 flex flex-col justify-center">
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
          <Paragraph
            innerHtml={
              (t("didacticHelp", { returnObjects: true }) as string[])[4]
            }
          />
        </div>
        <div className="hidden md:flex">
          <Image src="/images/maryla.webp" width={1001} height={2019} alt="" />
        </div>
      </div>
    </section>
  );
};

export default DidacticHelp;
