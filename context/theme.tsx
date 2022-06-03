import { createContext, ReactNode, useState } from "react";

export type ThemeContextType = {
  isMonochrome: boolean;
  setIsMonochrome: (arg0: boolean) => void;
  isFontLarge: boolean;
  setIsFontLarge: (arg0: boolean) => void;
};

interface IProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: IProps) => {
  const [isMonochrome, setIsMonochrome] = useState<boolean>(false);
  const [isFontLarge, setIsFontLarge] = useState<boolean>(false);
  return (
    <ThemeContext.Provider
      value={{ isMonochrome, setIsMonochrome, isFontLarge, setIsFontLarge }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
