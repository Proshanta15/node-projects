
import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/add-task.css";

export const AddTask = () => {
  const [taskData, setTaskData] = useState({ title: "", description: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleAddTask = async () => {
    setSuccess(false);
    setError("");
    if (!taskData.title.trim() || !taskData.description.trim()) {
      setError("Title and description cannot be empty.");
      return;
    }
    setLoading(true);
    try {
      let result = await fetch("http://localhost:3000/add-task", {
        method: "POST",
        body: JSON.stringify(taskData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      if (result) {
        setSuccess(true);
        setTaskData({ title: "", description: "" });
        navigate("/tasks");
      }
    } catch (e) {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="add-task">
      <h1>Add New Task</h1>
      <div className="add-task-card">
        <div className="input-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter task title"
            value={taskData.title}
            onChange={(event) => setTaskData({ ...taskData, title: event.target.value })}
          />
        </div>
        <div className="input-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter task description"
            value={taskData.description}
            onChange={(event) => setTaskData({ ...taskData, description: event.target.value })}
          ></textarea>
        </div>
        <button className="add-btn" onClick={handleAddTask} disabled={loading}>
          {loading ? "Adding..." : "Add New Task"}
        </button>
        {error && <div className="error-msg">{error}</div>}
        {success && <div className="success-msg">Task added successfully!</div>}
      </div>
    </div>
  );
};
