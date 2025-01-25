import React, { useState } from "react";
import { Delete } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { completedTodo, removeTodo } from "../store/todoSlice";

const TaskList = ({ todos, cardType }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  const onDeleteTask = (id) => {
    dispatch(removeTodo(id));
  };

  const handleChange = (id) => {
    setIsChecked((prev) => !prev);
    dispatch(completedTodo(id));
  };

  return (
    <section
      className={`${
        cardType === "card"
          ? "mt-4 grid grid-cols-1 sm:grid-cols-2 place-items-center gap-5"
          : ""
      }`}
    >
      {todos.map((todo) => (
        <>
          {cardType === "list" && (
            <hr className="bg-[#142E159e] h-0.5 border-none mt-2" />
          )}

          <div
            key={todo.id}
            className={`rounded-md ${
              cardType === "card"
                ? "min-w-[300px] border p-2 md:p-4"
                : "px-2 py-1 mt-2"
            } ${mode === "light" ? "bg-[#49654B]" : ""}`}
          >
            <div className={`mt-2 flex justify-between`}>
              <article className="flex-1 flex items-center gap-2 md:gap-3 lg:gap-5">
                <input
                  className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5 accent-green-500"
                  type="checkbox"
                  value={isChecked}
                  onChange={() => handleChange(todo.id)}
                />
                <p
                  className={`text-white text-sm md:text-base lg:text-xl ${
                    todo.isCompleted ? "line-through" : ""
                  }`}
                >
                  {todo.taskName}
                </p>
              </article>
              <article className="flex gap-8 items-center">
                <Badge
                  badgeContent={todo.priority}
                  color={`${
                    todo.priority === "low"
                      ? "secondary"
                      : todo.priority === "medium"
                      ? "primary"
                      : "warning"
                  }`}
                />
                <Delete
                  sx={{
                    cursor: "pointer",
                    fontSize: "20px",
                    color: "white",
                    ":hover": { color: "red" },
                  }}
                  onClick={() => onDeleteTask(todo.id)}
                />
              </article>
            </div>
          </div>
        </>
      ))}
    </section>
  );
};

export default TaskList;
