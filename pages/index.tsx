import type { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Authors from "../components/Authors";
import Ballads from "../components/Ballads";
import Bibliography from "../components/Bibliography";
import Contact from "../components/Contact";
import DidacticHelp from "../components/DidacticHelp";
import Game from "../components/Game";
import Hero from "../components/Hero";
import Project from "../components/Project";

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>{t("gameName")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Ballads />
      <Project />
      <Game />
      <DidacticHelp />
      <Authors />
      {/* <Contact /> */}
      <Bibliography />
    </div>
  );
};

export default Home;
