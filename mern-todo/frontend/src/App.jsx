import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./style/App.css";

function App() {
  return (
    <>
      <section>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>List of Tasks</h1>} />
          <Route path="/add" element={<h1>Add a Task</h1>} />
        </Routes>
      </section>
    </>
  );
}

export default App;
