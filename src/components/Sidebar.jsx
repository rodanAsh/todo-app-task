import React from "react";
import profile_img from "../assets/profile-pic.svg";
import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import WidthNormalOutlinedIcon from "@mui/icons-material/WidthNormalOutlined";
import BadgeSharpIcon from "@mui/icons-material/BadgeSharp";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const mode = useSelector((state) => state.theme.mode);
  return (
    <aside
      className={`mt-8 sm:mt-12 lg:mt-24 bg-[#2C2C2C] w-full lg:w-1/4 ${
        mode === "light" ? "bg-[#EEF6EF]" : ""
      }`}
    >
      <section className="static lg:relative flex flex-col py-2 justify-center top-[-70px]">
        <img
          className="w-20 lg:w-[120px] p-2 static mx-auto lg:relative"
          src={profile_img}
          alt=""
        />
        <h1 className="text-center">Hey, John Doe</h1>
        <div className="mt-4 m-4 hidden lg:flex bg-white py-4 flex-col gap-4">
          <Stack
            gap={3}
            direction="row"
            sx={{
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              ":hover": {
                backgroundColor: "#EEF6EF",
                color: "#357937",
                borderRadius: "10px",
              },
            }}
          >
            <AssignmentOutlinedIcon sx={{ fontSize: "24px" }} />
            <Typography sx={{ fontWeight: 500 }}>All Tasks</Typography>
          </Stack>
          <Stack
            gap={3}
            direction="row"
            sx={{
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              ":hover": {
                backgroundColor: "#EEF6EF",
                color: "#357937",
                borderRadius: "10px",
              },
            }}
          >
            <CalendarTodayOutlinedIcon sx={{ fontSize: "24px" }} />
            <Typography sx={{ fontWeight: 500 }}>Today</Typography>
          </Stack>
          <Stack
            gap={3}
            direction="row"
            sx={{
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              ":hover": {
                backgroundColor: "#EEF6EF",
                color: "#357937",
                borderRadius: "10px",
              },
            }}
          >
            <StarBorderOutlinedIcon sx={{ fontSize: "24px" }} />
            <Typography sx={{ fontWeight: 500 }}>Important</Typography>
          </Stack>
          <Stack
            gap={2}
            direction="row"
            sx={{
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              ":hover": {
                backgroundColor: "#EEF6EF",
                color: "#357937",
                borderRadius: "10px",
              },
            }}
          >
            <WidthNormalOutlinedIcon sx={{ fontSize: "24px" }} />
            <Typography sx={{ fontWeight: 500 }}>Planned</Typography>
          </Stack>
          <Stack
            gap={2}
            direction="row"
            sx={{
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              ":hover": {
                backgroundColor: "#EEF6EF",
                color: "#357937",
                borderRadius: "10px",
              },
            }}
          >
            <BadgeSharpIcon sx={{ fontSize: "24px" }} />
            <Typography sx={{ fontWeight: 500 }}>Assigned to me</Typography>
          </Stack>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-1 md:px-6 md:py-2 mt-4 font-semibold text-white mx-auto bg-red-500 hover:bg-red-700 rounded-md"
        >
          Logout
        </button>
      </section>
    </aside>
  );
};

export default Sidebar;
