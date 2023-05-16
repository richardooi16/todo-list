import { useState } from "react";
import "./App.css";

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
        { item: newTask },
      ]);
    }

    console.log(taskList);
  }

  return (
    <div className="App">

      <h1>Todo List App</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <button type="submit">Submit</button>
      </form>

      <div>
        {taskList.map((data) => (
          <p>{data.item}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
