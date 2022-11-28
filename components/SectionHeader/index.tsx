import React, { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../context/theme";

interface IProps {
  text: string;
}

const SectionHeader = ({ text }: IProps) => {
  const { isFontLarge, isMonochrome } = useContext(
    ThemeContext
  ) as ThemeContextType;
  return (
    <h2
      className={`text-center my-8 text-2xl uppercase font-serif ${
        isMonochrome ? "text-white" : "text-black"
      }`}
    >
      {text}
    </h2>
  );
};

export default SectionHeader;
