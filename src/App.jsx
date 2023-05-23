import { useState, useEffect } from "react";
import "./App.css";

let nextId = 0;

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('taskList'));
    if (data.length != 0) {
      setTaskList(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  function resetInput() {
    setTask("");
  }

  function handleCheckUpdate(data, e) {
    data.completed = e.target.checked;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // Add data validation here
    const newTask = formJson.task;
    if (newTask.trim() != "") {
      setTaskList([
        {
          id: nextId++,
          item: newTask,
          completed: false,
        },
        ...taskList // Put old items at the end
      ]);
    }
    resetInput();
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="submit-task" type="submit">Add Task</button>
      </form>

      <div className="tasklist-container">
        <ul>
          {taskList.map((data) => (
            <li key={data.id}>
              <label>
                <input
                  className="checkbox-task"
                  type="checkbox"
                  defaultChecked={data.completed}
                  onChange={(e) => handleCheckUpdate(data,e)}
                />
                {data.item}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Button for Debugging */}
      <button onClick={() => console.log(taskList)}>button</button>

    </div>
  );
}

export default App;
