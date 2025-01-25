import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { v4 as uuidV4 } from "uuid";

const TaskInput = () => {
  // task data
  const [taskData, setTaskData] = useState({
    task: "",
    priority: "low",
  });

  const mode = useSelector((state) => state.theme.mode);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidV4(),
      taskName: taskData.task,
      priority: taskData.priority,
      isCompleted: false,
    };
    dispatch(addTodo(newTask));
    setTaskData({
      task: "",
      priority: "low",
    });
  };

  return (
    <section
      className={`mt-4 bg-[#2F3630] p-4 ${
        mode === "light" ? "bg-[#EEF6EF]" : ""
      }`}
    >
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label className={`text-base font-semibold`}>Add a task</label>
        <input
          className="p-2 rounded-md outline-green-500 text-slate-950 border-none"
          text="text"
          name="task"
          value={taskData.task}
          onChange={handleChange}
        />
        <label className={`text-base font-semibold`}>Set Priority</label>
        <select
          name="priority"
          id="priority"
          className="p-2 rounded-md w-40 text-slate-950 outline-green-500 border-none font-semibold"
          value={taskData.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          type="submit"
          className={`px-4 py-2 bg-green-500 rounded-md mx-auto mt-5 text-white`}
        >
          Add Task
        </button>
      </form>
    </section>
  );
};

export default TaskInput;
