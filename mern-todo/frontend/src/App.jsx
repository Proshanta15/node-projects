import { Route, Routes } from "react-router-dom";
import { AddTask } from "./components/AddTask";
import { List } from "./components/List";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { SignUp } from "./components/SignUp";
import { UpdateTask } from "./components/UpdateTask";
import "./style/App.css";

function App() {
  return (
    <>
      <section>
        <Navbar />
        <Routes>
          <Route path="/tasks" element={<List />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/update/:id" element={<UpdateTask />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
