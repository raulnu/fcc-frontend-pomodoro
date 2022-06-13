import ToDoItem from "./ToDoItem";
import { useState } from "react";

export default function ToDoList() {
  const [toDoTasks, setToDoTasks] = useState(
    localStorage.getItem("tasks") === null
      ? [{ task: "Start working", id: 0 }]
      : JSON.parse(localStorage.getItem("tasks"))
  );
  const [newTasking, setNewTasking] = useState(false);
  const [taskIndex, setTaskIndex] = useState(1);
  const [newTask, setNewTask] = useState("");

  const setStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(toDoTasks));
  };

  const newTaskHandler = (e) => {
    e.preventDefault();
    setToDoTasks([...toDoTasks, { task: newTask, id: taskIndex }]);
    setTaskIndex(taskIndex + 1);
    setNewTasking(false);
    setStorage();
  };
  return (
    <section className="to-do-section mt-5 row justify-content-center">
      <h3 className="to-do-title col-12">Tasks to do:</h3>
      <ul className="to-do-list col-11 col-xl-10">
        {toDoTasks.map((task) => (
          <ToDoItem
            key={task.id}
            id={task.id}
            taskName={task.task}
            toDoTasks={toDoTasks}
            setToDoTasks={setToDoTasks}
            setStorage={setStorage}
          />
        ))}
      </ul>
      {!newTasking ? (
        <button
          type="button"
          className="btn change-button col-5"
          onClick={() => setNewTasking(true)}
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
              onClick={() => setNewTasking(false)}
            >
              ❌
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
