import { useState } from "react";
import "./App.css";

let nextId = 0;

function App() {
  const [taskList, setTaskList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // Add data validation here
    const newTask = formJson.task;
    if (newTask.trim() != "") {
      setTaskList([
        ...taskList, // Put old items at the end
        { 
          id: nextId++,
          item: newTask, 
          completed: false 
        },
      ]);
    }
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <button type="submit">Submit</button>
      </form>

      <div className="tasklist-container">
        <ul>
          {taskList.map((data) => (
            <li key={data.id}>
              <label>
                <input className="checkbox-task" type="checkbox" defaultChecked={false} />
                {data.item}
              </label>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
