import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, ThemeContextType } from "../../context/theme";

const Ballads = () => {
  const { t } = useTranslation();
  const { isFontLarge, isMonochrome } = useContext(
    ThemeContext
  ) as ThemeContextType;

  return (
    <main className="flex flex-col gap-4 h-auto font-serif">
      <p className="text-center">{t("testText")}</p>
      <div className="flex">
        {/* <section className="hidden max-w-full sm:max-w-sm sm:block bg-paper-1 bg-contain bg-no-repeat bg-center px-24">
            {(t("project", { returnObjects: true }) as string[]).map(
              (item, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: item,
                  }}
                ></p>
              )
            )}
          </section> */}
        <section
          className={`max-w-full  sm:h-auto w-full ${
            isFontLarge ? "sm:max-w-lg" : "sm:max-w-md"
          } ${
            isMonochrome ? "bg-paper-1-dark text-white" : "bg-paper-1"
          } bg-contain bg-no-repeat bg-center p-24`}
        >
          {(t("project", { returnObjects: true }) as string[]).map(
            (item, index) => (
              <p
                className="text-justify mb-4"
                key={index}
                dangerouslySetInnerHTML={{
                  __html: item,
                }}
              ></p>
            )
          )}
        </section>
      </div>
    </main>
  );
};

export default Ballads;
