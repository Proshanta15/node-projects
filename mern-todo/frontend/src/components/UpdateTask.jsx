
import { useEffect, useState } from "react";
import "../style/add-task.css";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateTask = () => {
  const [taskData, setTaskData] = useState({ title: "", description: "" });
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTaskData(id);
  }, [id]);

  const getTaskData = async (id) => {
    try {
      let result = await fetch(`http://localhost:3000/task/${id}`);
      result = await result.json();
      if (result.success) {
        setTaskData(result.result);
      }
    } catch (error) {
      console.error("Error fetching task data:", error);
    }
  };

    const updateTask = async () => {
        try {
            let result = await fetch(`http://localhost:3000/update-task/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(taskData)
            });
            result = await result.json();
            if (result.success) {
                console.log("Task updated successfully");
                navigate("/tasks");
            } else {
                console.error("Failed to update task");
            }
        } catch (error) {
            console.error("Error updating task:", error);
        }
    }


  return (
    <div className="add-task">
      <h1>Update Task</h1>
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
        <button onClick={updateTask} className="add-btn">
          Update Task
        </button>
      </div>
    </div>
  );
};
