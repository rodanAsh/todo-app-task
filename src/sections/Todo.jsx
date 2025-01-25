import React from "react";
import Sidebar from "../components/Sidebar";
import Task from "../components/Task";

const Todo = ({ cardType }) => {
  return (
    <section className="mt-4 flex flex-col lg:flex-row gap-5">
      <Sidebar />
      <Task cardType={cardType} />
    </section>
  );
};

export default Todo;
