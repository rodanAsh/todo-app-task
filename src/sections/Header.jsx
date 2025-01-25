import { Stack } from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ThemeToggle from "../components/ThemeToggle";

const Header = ({ cardType, setCardType }) => {
  return (
    <section className="flex items-center justify-between">
      {/* Left side */}
      <Stack
        spacing={2}
        direction="row"
        sx={{ display: "flex", alignItems: "center" }}
      >
        {/* <MenuIcon sx={{cursor:'pointer'}}  /> */}
        <img src={logo} alt="logo" />
      </Stack>
      {/* right side */}
      <Stack
        spacing={2}
        direction="row"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <SearchIcon sx={{ cursor: "pointer" }} />
        {cardType === "list" && (
          <GridViewIcon onClick={() => setCardType("card")} />
        )}
        {cardType === "card" && (
          <FormatListBulletedOutlinedIcon onClick={() => setCardType("list")} />
        )}
        <ThemeToggle />
      </Stack>
    </section>
  );
};

export default Header;
