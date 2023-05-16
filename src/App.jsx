import { useState } from 'react'
import { useForm } from "react-hook-form";
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [taskList, setTaskList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    
    // Add data validation here
    const newTask = formJson.task;

    setTaskList([
      ...taskList, // Put old items at the end
      { item: newTask }
    ]);

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
          <p>{data.item}</p>
        ))}
      </div>

    </div>
  );
}

export default App
