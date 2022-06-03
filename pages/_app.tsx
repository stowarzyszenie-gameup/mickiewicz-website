import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeProvider from "../context/theme";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../locales/en/common.json";
import plTranslations from "../locales/pl/common.json";

const resources = {
  en: {
    common: enTranslations,
  },
  pl: {
    common: plTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  ns: ["common"],
  defaultNS: "common",
  lng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
