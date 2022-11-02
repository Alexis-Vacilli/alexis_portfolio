import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    light: {
      titleColor: "hsl(0, 0%, 20%)",
      titleColorDark: "hsl(0, 0%, 0%)",
      textColor: "hsl(0, 0%, 46%)",
      bodyColor: "hsl(0, 0%, 98%)",
      containerColor: "#fff",
      navBgColor: "rgba(255, 255, 255, 0.5)",
      buttonColor: "hsl(0, 0%, 20%)",
      buttonTextColor: "#fff",
      border: "1px solid rgba(0, 0, 0, 0.1)"
    },
    dark: {
      titleColor: "rgba(255, 255, 255, .7)",
      bodyColor: "#030303",
      navBgColor: "rgba(0, 0, 0, 0.2)",
      buttonColor: "rgb(234, 255, 150)",
      buttonTextColor: "black",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      containerColor: "#000",
      textColor: "hsl(0, 0%, 64%)"
    },
  };

  toggleTheme = () => {
    this.setState({isLightTheme: !this.state.isLightTheme})
  }
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
