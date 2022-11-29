import React, { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, ThemeContextType } from "../../context/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeLowVision,
  faFont,
} from "@fortawesome/free-solid-svg-icons";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  const { isFontLarge, setIsFontLarge, isMonochrome, setIsMonochrome } =
    useContext(ThemeContext) as ThemeContextType;
  const { t, i18n } = useTranslation();

  const switchLanguage = () =>
    i18n.language === "en"
      ? i18n.changeLanguage("pl")
      : i18n.changeLanguage("en");

  return (
    <div
      className={`${isMonochrome ? "dark" : ""} leading-normal`}
      style={isFontLarge ? { fontSize: "150%" } : { fontSize: "125%" }}
    >
      <div className="fixed bottom-0 right-0 flex gap-4 bg-accent dark:bg-black dark:text-white z-50">
        <button
          onClick={() => setIsMonochrome(!isMonochrome)}
          className="w-12 h-12"
        >
          <FontAwesomeIcon
            icon={isMonochrome ? faEye : faEyeLowVision}
            size="1x"
          />
          <span className="sr-only">
            {isMonochrome ? t("standardTheme") : t("highContrastTheme")}
          </span>
        </button>
        <button
          onClick={() => setIsFontLarge(!isFontLarge)}
          className="w-12 h-12"
        >
          <FontAwesomeIcon icon={faFont} size={isFontLarge ? "1x" : "2x"} />
          <span className="sr-only">
            {isFontLarge ? t("smallerFont") : t("largerFont")}
          </span>
        </button>
        <button
          onClick={() => switchLanguage()}
          className="w-12 h-12"
          aria-label={i18n.language === "en" ? t("langPl") : t("langEn")}
        >
          {i18n.language === "en" ? "PL" : "EN"}
        </button>
      </div>
      <div className="flex flex-col font-primary bg-secondary dark:bg-secondaryDark">
        <Navbar />
        <div className="w-full">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
