import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./style/App.css";
import { AddTask } from "./components/AddTask";
import { List } from "./components/List";
import { UpdateTask } from "./components/UpdateTask";

function App() {
  return (
    <>
      <section>
        <Navbar />
        <Routes>
          <Route path="/tasks" element={<List />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/update/:id" element={<UpdateTask />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
