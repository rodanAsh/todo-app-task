import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";


const ThemeToggle = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.mode);

    return (
        <IconButton onClick={() => dispatch(toggleTheme())} color="inherit">
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
};

export default ThemeToggle;