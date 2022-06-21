import ToDoItem from "./ToDoItem";
import { useEffect, useState } from "react";

export default function ToDoList() {
  const [toDoTasks, setToDoTasks] = useState(
    localStorage.getItem("tasks") === null
      ? [{ task: "Start working", id: 0, completed: false }]
      : JSON.parse(localStorage.getItem("tasks"))
  );
  const [newTasking, setNewTasking] = useState(false);
  const [newTask, setNewTask] = useState("");

  useEffect(
    () => localStorage.setItem("tasks", JSON.stringify(toDoTasks)),
    [toDoTasks]
  );

  const toggleNewTasking = () => {
    setNewTasking(!newTasking);
  };

  const newTaskHandler = (e) => {
    e.preventDefault();
    setToDoTasks([
      ...toDoTasks,
      {
        task: newTask,
        id: toDoTasks[toDoTasks.length - 1].id + 1,
        completed: false,
      },
    ]);
    setNewTasking(false);
  };
  return (
    <section className="to-do-section mt-5 row justify-content-center">
      <h3 className="to-do-title col-12">Tasks to do:</h3>
      <ul className="to-do-list col-11 col-xl-10">
        {toDoTasks.map((task) => (
          <ToDoItem
            key={task.id}
            id={task.id}
            completed={task.completed}
            taskName={task.task}
            toDoTasks={toDoTasks}
            setToDoTasks={setToDoTasks}
          />
        ))}
      </ul>
      {!newTasking ? (
        <button
          type="button"
          className="btn change-button col-5"
          onClick={toggleNewTasking}
        >
          New task
        </button>
      ) : (
        <form className="new-task-form col-12">
          <div className="row justify-content-center">
            <fieldset className="col-6">
              <input
                autoFocus
                type="text"
                className="new-task-name form-control"
                placeholder="Type your new task"
                onChange={(e) => setNewTask(e.target.value)}
              />
            </fieldset>
            <button
              type="submit"
              className="btn btn-warning col-2 d-flex justify-content-center"
              onClick={newTaskHandler}
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-danger col-2"
              onClick={toggleNewTasking}
            >
              ❌
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
