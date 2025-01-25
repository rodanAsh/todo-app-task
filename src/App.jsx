import React, { useState } from "react";
import Todo from "./sections/Todo";
import { Route, Routes } from "react-router-dom";
import Login from "./sections/Login";
import PrivateRoutes from "./private-routes/PrivateRoutes";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./utils/theme.js";

const App = () => {
  const [cardType, setCardType] = useState("list");

  const mode = useSelector((state) => state.theme.mode);

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <main className="max-w-7xl py-4 px-4 ms:px-8 lg:px-12">
        <Routes>
          <Route
            element={
              <PrivateRoutes cardType={cardType} setCardType={setCardType} />
            }
          >
            <Route path="/home" element={<Todo cardType={cardType} />} />
          </Route>
          <Route path={"/"} element={<Login />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
};

export default App;
