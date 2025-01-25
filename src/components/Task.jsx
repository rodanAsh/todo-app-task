import { Stack } from "@mui/material";
import React from "react";
import TaskInput from "./TaskInput";
import { useSelector } from "react-redux";
import TaskList from "./TaskList";

const Task = ({ cardType }) => {
  const todos = useSelector((state) => state.todo);

  return (
    <section className="flex-1">
      <TaskInput todos={todos} />
      <TaskList todos={todos} cardType={cardType} />
    </section>
  );
};

export default Task;
