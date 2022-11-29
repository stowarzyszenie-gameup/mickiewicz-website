import type { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Authors from "../components/Authors";
import Ballads from "../components/Ballads";
import Bibliography from "../components/Bibliography";
import DidacticHelp from "../components/DidacticHelp";
import Game from "../components/Game";
import Hero from "../components/Hero";
import Project from "../components/Project";
import ogImage_pl from "../assets/images/ballady_og_pl.jpg";
import ogImage_en from "../assets/images/ballady_og_en.jpg";
import ttImage_pl from "../assets/images/ballady_tt_pl.jpg";
import ttImage_en from "../assets/images/ballady_tt_en.jpg";

const Home: NextPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content={i18n.language} />
        <title>{t("metaTitle")}</title>
        <meta name="description" content={t("metaDescription")} />
        <meta property="og:title" content={t("metaTitle")} />
        <meta property="og:description" content={t("metaDescription")} />
        <meta property="og:url" content="https://balladyiromanse.pl" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={i18n.language === "pl" ? ogImage_pl.src : ogImage_en.src}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={i18n.language === "pl" ? ttImage_pl.src : ttImage_en.src}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="rating" content="safe for kids" />
        <meta name="copyright" content="Copyright 2022 Astrolabe Stories" />
      </Head>
      <Hero />
      <Ballads />
      <Project />
      <Game />
      <DidacticHelp />
      <Authors />
      <Bibliography />
    </div>
  );
};

export default Home;
