import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const useColorScheme = () => {
  const { theme: currentTheme } = useTheme();

  const getColorSchemeValue = () => {
    const htmlElement =
      typeof document !== "undefined" && document.querySelector("html");
    return (
      htmlElement &&
      window.getComputedStyle(htmlElement).getPropertyValue("color-scheme")
    );
  };

  const [theme, setTheme] = useState(getColorSchemeValue());

  useEffect(() => {
    const updateTheme = () => {
      const colorScheme = getColorSchemeValue();
      if (colorScheme !== theme) {
        setTheme(colorScheme);
      }
    };

    updateTheme(); // Initial call to set the initial theme

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      updateTheme();
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentTheme === "system") {
      const systemColorScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? "dark"
        : "light";
      setTheme(systemColorScheme);
    } else if (currentTheme !== theme) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      currentTheme && setTheme(currentTheme);
    }
  }, [currentTheme, theme]);

  return { theme };
};
