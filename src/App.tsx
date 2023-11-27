import React, {JSX, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";
import SignUp from "./components/SignUp/SignUp";
import LazyMenu from "./components/Menu/Menu.async";
import {Main} from "./components/Main";
import LazyProfile from "./components/Profile/Profile.async";
import "./main.css";
import Theme from "./styles/Theme";


const App = () : JSX.Element => {

    return(
        <BrowserRouter>
            <ThemeProvider>
                <Theme/>
               <Routes>
                    <Route path={"/"} element={<Main/>} >
                            <Route path={"/menu"} element={
                                <Suspense fallback>
                                    <LazyMenu/>
                                </Suspense>

                            }/>
                            <Route path={"/profile"} element={
                                <Suspense fallback>
                                    <LazyProfile/>
                                </Suspense>
                            }/>
                        <Route path={"/signUp"} element={<SignUp/>}/>
                        <Route path={"/search"} element={<Main/>}/>
                        <Route path={"/list"} element={<Main/>}/>
                    </Route>
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App;