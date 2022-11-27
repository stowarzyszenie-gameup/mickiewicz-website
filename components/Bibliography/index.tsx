import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../SectionHeader";

const Bibliography = () => {
  const { t } = useTranslation();
  return (
    <section id="authors" className="bg-secondary w-full">
      <SectionHeader text={t("bibliographyHeader")} />
    </section>
  );
};

export default Bibliography;
