import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext, ThemeContextType } from "../../context/theme";

const Ballads = () => {
  const { t } = useTranslation();
  const { isFontLarge, isMonochrome } = useContext(
    ThemeContext
  ) as ThemeContextType;

  return (
    <main
      className={`flex flex-col gap-4 h-auto font-serif prose ${
        isFontLarge ? "prose-lg sm:prose-xl" : "prose-base sm:prose-lg"
      } dark:prose-invert`}
    >
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
          id="ballads"
          className={`flex flex-col justify-center items-center max-w-full bg-[length:800px_600px] sm:bg-[length:contain] h-[600px] p-8 sm:h-auto w-full ${
            isFontLarge ? "sm:max-w-xl" : "sm:max-w-lg"
          } ${
            isMonochrome ? "bg-paper-1-dark text-white" : "bg-paper-1"
          } bg-no-repeat bg-center sm:p-24`}
        >
          {(t("project", { returnObjects: true }) as string[]).map(
            (item, index) => (
              <p
                className="text-left mb-4"
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
