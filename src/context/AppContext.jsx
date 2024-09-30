import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("my-theme") || "light"
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem("my-theme", theme);
    }, [theme]);

    return (
        <GlobalContext.Provider value={{ theme, setTheme }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default AppContext;