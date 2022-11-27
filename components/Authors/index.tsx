import React from "react";
import { useTranslation } from "react-i18next";
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
  {
    title: "Web Developer",
    people: [{ name: "Michał Hawełka", role: "" }],
  },
];

const Authors = () => {
  const { t } = useTranslation();
  return (
    <section
      id="authors"
      className="bg-white w-full flex flex-col items-center"
    >
      <SectionHeader text={t("authorsHeader")} />
      <div className="prose max-w-none grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {authors.map((section, index) => (
          <AuthorsSection
            key={`authors_${index}`}
            title={section.title}
            people={section.people}
          />
        ))}
        <h4></h4>
      </div>
    </section>
  );
};

export default Authors;
