import {LOCAL_STORAGE_THEME_KEY, ThemeType} from "../context/ThemeContext";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";

type useThemeReturnType = {
    handleThemeSwitch : () => void;
    theme: ThemeType;
}

const useTheme = (): useThemeReturnType => {
    const {theme, setTheme} = useContext(ThemeContext);

    const handleThemeSwitch = () => {
        console.log("switch theme");
        setTheme(theme === "Dark" ? "Light" : "Dark");
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme === "Dark" ? "Light" : "Dark");
    }

    return {
        theme, handleThemeSwitch
    }
}

export default useTheme;