import React, { createContext, useState } from "react";
import { colorPalette } from "../constants";

const Context = createContext({
  theme: "",
  toggleTheme: null
});

const changeColorsTo = (theme) => {
  const properties = [
    "background",
    "paraText",
    "headerText",
    "base",
    "pressed",
    "shade"
  ];
  if (typeof document !== "undefined")
    properties.forEach((x) => {
      document.documentElement.style.setProperty(
        `--${x}`,
        colorPalette[(theme === undefined ? "dark" : theme).toLowerCase()][x]
      );
    });
};

const ContextProvider = (props) => {
  let [currentTheme, setTheme] = useState(
    (() => {
      if (typeof window !== "undefined") {
        return localStorage.getItem("themeSwitch") !== null
          ? localStorage.getItem("themeSwitch")
          : "LIGHT";
      } else {
        return "DARK";
      }
    })()
  );
  changeColorsTo(currentTheme);

  let themeSwitchHandler = () => {
    const newTheme = currentTheme === "DARK" ? "LIGHT" : "DARK";
    setTheme(newTheme);
    window && localStorage.setItem("themeSwitch", newTheme);
    changeColorsTo(newTheme);
  };

  return (
    <Context.Provider
      value={{
        theme: currentTheme,
        toggleTheme: themeSwitchHandler
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
