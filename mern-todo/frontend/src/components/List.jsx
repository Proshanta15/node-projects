
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/list.css";

export const List = () => {

  const [taskData, setTaskData] = useState();
  const [selectedTask, setSelectedTask] = useState([]);
  

  useEffect(() => {
    getListData();
  }, []);

  const getListData = async() =>{
    try {
      let list = await fetch("http://localhost:3000/tasks");
      list = await list.json();
      
      if(list.success){
        setTaskData(list.result);
      }
    }catch(error){
      console.error("Error fetching tasks:", error);
    }
  }

  const handleDelete = async(id) =>{
    try {
      let item = await fetch(`http://localhost:3000/delete/${id}`, {
        method: "DELETE",
      });
      item = await item.json();
      if(item.success){
        getListData();
        console.log("Item deleted successfully");
        
      }
    } catch (error) {
        console.error("Error deleting task:", error);
    }
  }

  const selectAll = (event) => {
    if(event.target.checked){
      const items = taskData.map((item) => item._id);
      setSelectedTask(items); 
    }else{
      setSelectedTask([]);
    }
  }
  const selectedSignleItem = (id) => {
    if(selectedTask.includes(id)){
      setSelectedTask(selectedTask.filter((item) => item !== id));
    }else{
      setSelectedTask([...selectedTask, id]);
    }
  }

  const handleDeleteSelected = async() => {
    try {
      let item = await fetch(`http://localhost:3000/delete-multiple`, {
        method: "DELETE",
        body: JSON.stringify(selectedTask),
        headers: {
          "Content-Type": "application/json"
        },
        
      });
      item = await item.json();
      if(item.success){
        getListData();
        console.log("Item deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting selected tasks:", error);
    }
  }

  return (
    <div className="list">
      <h1>Todo List</h1>
      <div>
        <div className="list-card">
          <h2>Task Title</h2>
          <button onClick={handleDeleteSelected} className="delete-btn">Delete Selected</button>
          <ul>
            <li><input onChange={selectAll} type="checkbox" /></li>
            <li>S.No</li>
            <li>Title</li>
            <li>Description</li>
            <li>Action</li>
            {taskData && taskData.length > 0 ? (
              taskData.map((task, index) => (
                <Fragment key={task._id}>
                <li><input type="checkbox" onChange={() =>selectedSignleItem(task._id)} checked={selectedTask.includes(task._id)} /></li>
                <li >{index + 1}</li>
                <li >{task.title}</li>
                <li >{task.description}</li>
                <li><button onClick={() =>handleDelete(task._id)} className="delete-btn">Delete</button>
                <Link to={`/update/${task._id}`} className="update-btn">Update</Link></li>
              </Fragment>
              ))
            ) : (
              <li>No tasks available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
