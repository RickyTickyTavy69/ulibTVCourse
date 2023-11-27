import React, {JSX} from "react";
import {Link, Outlet} from "react-router-dom";
import classNames from "../utils/classNames/classNames";

export const Main = () : JSX.Element => {
    return(
        <div>
            <div className={classNames("bg-bkg", {}, [ "h-screen", "text-content"])}>
                <nav className={"flex gap-2"}>
                    <Link to={"/profile"}>Profile</Link>
                    <Link to={"/menu"}>Menu</Link>
                    <Link to={"/"}>Main</Link>
                </nav>
                <div className={"pt-10 flex items-center justify-center"}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}