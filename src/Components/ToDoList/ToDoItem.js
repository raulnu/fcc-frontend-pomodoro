import PropTypes from "prop-types";
import { useState } from "react";

export default function ToDoItem({ id, taskName, toDoTasks, setToDoTasks }) {
  const [taskText, setTaskText] = useState(taskName);
  const [editing, setEditing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const deleteHandler = () => {
    setToDoTasks(toDoTasks.filter((task) => id !== task.id));
  };

  return (
    <li className={`task border rounded row ${completed && "bg-secondary"}`}>
      {editing ? (
        <form className="row justify-content-center">
          <fieldset className="col-9">
            <input
              autoFocus
              type="text"
              className="form-control"
              onChange={(e) => setTaskText(e.target.value)}
              defaultValue={taskText}
            />
          </fieldset>
          <button
            type="submit"
            className="btn btn-info col-3"
            onClick={(e) => {
              e.preventDefault();
              setEditing(false);
            }}
          >
            Edit
          </button>
        </form>
      ) : (
        <div className="col-12">
          <div className="row justify-content-between align-items-center">
            <span
              className={`task-name col-6 p-1 ${
                completed && "text-decoration-line-through"
              }`}
            >
              {taskText}
            </span>
            <div className="col-6">
              <div className="row justify-content-end">
                <button
                  type="button"
                  className="btn btn-info task-button col-5"
                  onClick={() => {
                    setEditing(true);
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-success task-button col-5"
                  onClick={() => {
                    setCompleted(!completed);
                  }}
                >
                  Done
                </button>
                <button
                  type="button"
                  className="btn btn-danger task-button col-10"
                  onClick={deleteHandler}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

ToDoItem.propTypes = {
  taskName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  toDoTasks: PropTypes.array.isRequired,
  // setTodoTasks: PropTypes.func.isRequired,
};
