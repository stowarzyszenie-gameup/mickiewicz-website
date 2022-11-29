import React, { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../context/theme";

interface IProps {
  innerHtml: string;
  customClasses?: string;
}

const Paragraph = ({ innerHtml, customClasses }: IProps) => {
  const { isFontLarge, isMonochrome } = useContext(
    ThemeContext
  ) as ThemeContextType;
  return (
    <p
      className={`font-serif prose ${
        isFontLarge
          ? "prose-lg sm:prose-xl lg:prose-2xl"
          : "prose-base sm:prose-lg lg:prose-xl"
      } dark:prose-invert ${
        isMonochrome ? "text-white" : "text-black"
      } text-left mb-4 ${customClasses}`}
      dangerouslySetInnerHTML={{
        __html: innerHtml,
      }}
    ></p>
  );
};

export default Paragraph;
