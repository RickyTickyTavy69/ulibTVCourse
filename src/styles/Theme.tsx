import {useEffect} from "react";
import useTheme from "../hooks/useTheme";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "../context/ThemeContext";



const Theme = () => {

    const {theme, handleThemeSwitch} = useTheme();


    console.log("theme is", theme);

    useEffect(() => {
        console.log("theme changed", theme);
        document.documentElement.className = theme.toLowerCase();
    }, [theme]);



    return (<div className={"rounded-lg w-20 absolute right-10 text-content top-10 hover:text-accent-1 border-black"}>
        <button onClick={handleThemeSwitch} className={"border-2 border-content p-2 rounded-lg"}>Switch Theme</button>
    </div>);
}

export default Theme;