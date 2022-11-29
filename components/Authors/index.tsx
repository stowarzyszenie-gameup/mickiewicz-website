import Image from "next/image";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, ThemeContextType } from "../../context/theme";
import SectionHeader from "../SectionHeader";
import AuthorsSection from "./AuthorsSection";

const authors = [
  {
    title: "ASTROLABE STORIES PRODUCTION",
    people: [
      { name: "Adam Flamma", role: "" },
      { name: "Szymon Stoczek", role: "" },
      { name: "Szymon Makuch", role: "" },
      { name: "Nina Świłło", role: "" },
    ],
  },
  {
    title: "Design & Development",
    people: [
      { name: "Ilias Abdeljalil", role: "Game developer" },
      { name: "Wiktor Pawlik", role: "Game designer" },
    ],
  },
  {
    title: "Story",
    people: [
      { name: "Szymon Stoczek", role: "Lead writer" },
      { name: "Aleksandra Browarska", role: "Writer" },
    ],
  },
  {
    title: "Art",
    people: [
      { name: "Patrycja Skałecka-Wodziczko", role: "Lead 2D artist" },
      { name: "Sara Grzelak", role: "2D artist" },
      { name: "Bartosz Wardaszko", role: "2D artist" },
      { name: "Antoni Jastrzębski", role: "Character artist" },
    ],
  },
  {
    title: "Animation",
    people: [
      { name: "Karolina Lewicka", role: "Trailer animator" },
      { name: "Sara Grzelak", role: "2D animator" },
      { name: "Bartosz Wardaszko", role: "2D animator" },
    ],
  },
  {
    title: "UI Design",
    people: [
      { name: "Patrycja Skałecka-Wodziczko", role: "UI designer" },
      { name: "Sara Grzelak", role: "UI designer" },
    ],
  },
  {
    title: "Music",
    people: [
      { name: "Patryk Scelina", role: "Game music composer" },
      { name: "Kamil Mazerant", role: "Trailer music composer" },
    ],
  },
  {
    title: "Sounds",
    people: [{ name: "Kamil Mazerant", role: "Sound designer" }],
  },
  {
    title: "Quality Assurance",
    people: [
      { name: "Jacek Godlewski", role: "" },
      { name: "Adam Flamma", role: "" },
      { name: "Piotr Emmanuel", role: "" },
    ],
  },
  {
    title: "Localisation",
    people: [
      { name: "Katarzyna “Keitah” Flamma", role: "English translator" },
      { name: "Adam Flamma", role: "English translator" },
    ],
  },
  {
    title: "PR & Marketing",
    people: [{ name: "Aleksandra “Alexia” Majerska", role: "" }],
  },
  {
    title: "LITERATURE RESEARCH & CONSULTATION",
    people: [{ name: "Szymon Makuch", role: "" }],
  },
  {
    title: "UNITY ASSETS",
    people: [
      {
        name: "",
        role: "",
        alternative:
          "In this game, we use Dialogue System for Unity by Pixel Crushers",
      },
    ],
  },
  {
    title: "SOUND ASSETS",
    people: [
      {
        name: "",
        role: "",
        alternative:
          "In this game, we use Sound Effect Pack by Finnolia Productions Inc.",
      },
    ],
  },
];

const Authors = () => {
  const { t } = useTranslation();
  const { isFontLarge, isMonochrome } = useContext(
    ThemeContext
  ) as ThemeContextType;
  return (
    <section
      id="authors"
      className="bg-white dark:bg-black w-full flex flex-col items-center pb-8"
    >
      <SectionHeader text={t("authorsHeader")} />
      <div
        className={`prose dark:prose-invert max-w-none grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-black dark:bg-white gap-x-px ${
          isFontLarge ? "prose-xl" : ""
        }`}
      >
        {authors.map((section, index) => (
          <AuthorsSection
            key={`authors_${index}`}
            title={section.title}
            people={section.people}
          />
        ))}
        <AuthorsSection
          title={"Web developer"}
          people={[{ name: "Michał Hawełka", role: "" }]}
          customClass="md:col-span-2 xl:col-span-1"
        />
      </div>
      <div className="w-11/12">
        <h3 className="text-black dark:text-white font-serif text-lg md:text-2xl xl:text-4xl xl:my-12 text-center mb-4">
          {t("producers")}
        </h3>
        <div className="flex items-center gap-8 justify-center">
          <div className="w-1/4">
            <a
              href="https://www.astrolabestories.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label={t("astrolabeLinkName")}
            >
              {isMonochrome ? (
                <Image
                  src="/images/logos/astrolabe_white.webp"
                  width={462}
                  height={557}
                  alt=""
                />
              ) : (
                <Image
                  src="/images/logos/astrolabe_black.webp"
                  width={462}
                  height={557}
                  alt=""
                />
              )}
            </a>
          </div>
          <div className="w-1/3">
            <a
              href="https://www.gameup.org.pl/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label={t("gameupLinkName")}
            >
              {isMonochrome ? (
                <Image
                  src="/images/logos/gameup_white.webp"
                  width={927}
                  height={184}
                  alt=""
                />
              ) : (
                <Image
                  src="/images/logos/gameup_black.webp"
                  width={927}
                  height={184}
                  alt=""
                />
              )}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authors;
