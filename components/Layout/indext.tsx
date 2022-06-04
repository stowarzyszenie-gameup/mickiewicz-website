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
      className={isMonochrome ? "dark" : ""}
      style={isFontLarge ? { fontSize: "20px" } : {}}
    >
      <div className="fixed right-0 top-1/2 flex flex-col gap-4 bg-slate-300 dark:bg-black dark:text-white w-12">
        <button
          onClick={() => setIsMonochrome(!isMonochrome)}
          className="w-12 h-12"
        >
          <FontAwesomeIcon
            icon={isMonochrome ? faEye : faEyeLowVision}
            size="1x"
          />
        </button>
        <button
          onClick={() => setIsFontLarge(!isFontLarge)}
          className="w-12 h-12"
        >
          <FontAwesomeIcon icon={faFont} size={isFontLarge ? "1x" : "2x"} />
        </button>
        <button onClick={() => switchLanguage()} className="w-12 h-12">
          {i18n.language === "en" ? "PL" : "EN"}
        </button>
      </div>
      <div className="flex flex-col lg:flex-row font-primary bg-white dark:bg-gray-400 ">
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
