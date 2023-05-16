import { useState } from 'react'
import { useForm } from "react-hook-form";
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);
    console.log(formJson.task);
    taskList.push(formJson.task);
    console.log(taskList);
  };

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <input type="text" name="task"/>
        <button type="submit">Submit</button>
      </form>

      <div>
        {taskList.map((data) => (
          <p>{data}</p>
        ))}
      </div>

    </div>
  );
}

export default App
