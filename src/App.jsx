import { useState } from 'react'
import { useForm } from "react-hook-form";
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const submitTask = async (data) => {
    console.log(data);
    taskList.push(data);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <form onSubmit={handleSubmit(submitTask)}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>

      <div>
        {taskList.map((data) => (
          <p>{data}</p>
        ))}
      </div>

      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App
