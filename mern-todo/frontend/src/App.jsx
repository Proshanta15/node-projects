import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./style/App.css";
import { AddTask } from "./components/AddTask";
import { List } from "./components/List";

function App() {
  return (
    <>
      <section>
        <Navbar />
        <Routes>
          <Route path="/tasks" element={<List />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
