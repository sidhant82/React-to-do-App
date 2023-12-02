/*import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

 const TodoApp=(props)=> {
  const [editedTask, setEditedTask] = useState(props.temp);

  return (
<>
    

    <div>
  <input type='text' value={editedTask}   onChange={(e)=>setEditedTask(e.target.value)}/>
  <span><button class="btn btn-outline-secondary" type="button" onClick={()=> props.Remove(props.temp)}>Delete</button>  </span>
    
  <span><button class="btn btn-outline-secondary" type="button" onClick={()=>props.Edit()}>Edit</button>  </span>




</div>




    </>
  )
}
export default TodoApp;*/


import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const TodoApp = (props) => {
  const [editedTask, setEditedTask] = useState(props.temp);
  const [isEditing, setIsEditing] = useState(true);

  const handleEditChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleEditSave = () => {
    props.edit(props.temp, editedTask);
    setIsEditing(false);
  };

  return (
    <>
      <div>
        {isEditing ? (
          <input type="text" value={editedTask} onChange={handleEditChange} />
        ) : (
          <h1>{props.temp}</h1>
        )}
        <span>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => props.remove(props.temp)}
          >
            Delete
          </button>
        </span>
        <span>
          {isEditing ? (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleEditSave}
            >
              Save
            </button>
          ) : (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </span>
      </div>
    </>
  );
};

export default TodoApp;
