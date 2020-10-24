import React from 'react';
import {NavLink} from "react-router-dom";

export const AppHeader = () => {
    return (
        <header className="page-routes">
            <ul>
                <li>
                    <NavLink to="/">
                        Форма
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/pallete">
                        Палитра
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};


