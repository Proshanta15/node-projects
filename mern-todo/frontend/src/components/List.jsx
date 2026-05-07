
import { Fragment, useEffect , useState} from "react";
import "../style/list.css";
import { Link } from "react-router-dom";

export const List = () => {

  const [taskData, setTaskData] = useState();

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

  return (
    <div className="list">
      <h1>Todo List</h1>
      <div>
        <div className="list-card">
          <h2>Task Title</h2>
          <ul>
            <li>S.No</li>
            <li>Title</li>
            <li>Description</li>
            <li>Action</li>
            {taskData && taskData.length > 0 ? (
              taskData.map((task, index) => (
                <Fragment key={task._id}>
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
