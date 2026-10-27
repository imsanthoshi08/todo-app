import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import Filters from "./components/Filters";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (text) =>
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));
  const clearDone = () => setTasks(tasks.filter((t) => !t.done));

  const shown = tasks.filter((t) =>
    filter === "All" ? true : filter === "Active" ? !t.done : t.done
  );
  const left = tasks.filter((t) => !t.done).length;

  return (
    <div className="app">
      <h1>My Tasks</h1>
      <p className="sub">Plan your day. Make progress.</p>
      <div className="card">
        <TodoForm onAdd={addTask} />
        <div className="info">
          <span>{left} remaining</span>
          <span>{tasks.length - left} completed</span>
        </div>
        <Filters filter={filter} setFilter={setFilter} />
        {shown.map((t) => (
          <TodoItem key={t.id} task={t} onToggle={toggleTask} onDelete={deleteTask} />
        ))}
        <div className="info">
          <span>{tasks.length} total tasks</span>
          <button className="link" onClick={clearDone}>Clear completed</button>
        </div>
      </div>
    </div>
  );
}