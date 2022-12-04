import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../components/SectionHeader";
import { ThemeContext, ThemeContextType } from "../../context/theme";

const PrivacyPolicy: NextPage = () => {
  const { t, i18n } = useTranslation();
  const { isFontLarge, isMonochrome } = useContext(
    ThemeContext
  ) as ThemeContextType;

  return (
    <div className="flex flex-col items-center mb-4">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content={i18n.language} />
        <title>{t("metaPrivacyTitle")}</title>
        <meta name="description" content={t("metaDescription")} />
        <meta property="og:title" content={t("metaPrivacyTitle")} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="rating" content="safe for kids" />
        <meta name="copyright" content="Copyright 2022 Astrolabe Stories" />
      </Head>
      <SectionHeader text={t("privacyPolicyHeader")} />
      <article
        className={`${
          isFontLarge
            ? "sm:max-w-xl md:max-w-2xl xl:max-w-7xl prose-lg sm:prose-xl lg:prose-2xl"
            : "sm:max-w-lg md:max-w-xl xl:max-w-6xl prose-base sm:prose-lg lg:prose-xl"
        } prose font-serif text-black dark:text-white px-4 sm:p-0`}
        dangerouslySetInnerHTML={{ __html: t("privacyPolicyContent") }}
      ></article>
    </div>
  );
};

export default PrivacyPolicy;
