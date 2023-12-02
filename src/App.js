/*import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import TodoApp from './TodoApp';
import { useState } from 'react';

function App() {
  let[data,setData]=useState([]);
  let[Enter,setEnter]=useState();
  
  

  const handleInput=(e)=>{
       setEnter(e.target.value);
  }

  const handleBtn=()=>{

    setData([Enter,...data]);
  }

  const Remove=(nm)=>{
    
     let d=( data.filter((temp)=> temp!=nm ));
      setData(d);

  }

 const Edit=(oldTask,newTask)=>{

     setData(data.map((temp)=>{
      if(temp==oldTask)
      {
       setData(newTask);
        return temp;
      }
      else{
        return temp;
      }
     }))

 }
  return (
    <div className="App">
        <h1 className='A1'>TodoApp</h1>
  <input type="text" class="form-control" placeholder="Enter Any task"   onChange={handleInput}/>
     
  <span><button class="btn btn-outline-secondary" type="button" onClick={handleBtn}>Add</button>  </span>

    
       {
        data.map((temp)=><TodoApp  temp={temp} Remove={Remove}  Edit={Edit}/>)
       }
      
      
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import TodoApp from './TodoApp';

function App() {
  const [data, setData] = useState([]);
  const [enter, setEnter] = useState('');

  const handleInput = (e) => {
    setEnter(e.target.value);
  };

  const handleBtn = () => {
    setData([enter, ...data]);
    setEnter('');
  };

  const remove = (nm) => {
    const updatedData = data.filter((temp) => temp !== nm);
    setData(updatedData);
  };

  const edit = (oldTask, newTask) => {
    const updatedData = data.map((temp) => (temp === oldTask ? newTask : temp));
    setData(updatedData);
  };

  return (
    <div className="App">
      <h1 className="A1">TodoApp</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Any task"
        value={enter}
        onChange={handleInput}
      />
      <span>
        <button className="btn btn-outline-secondary" type="button" onClick={handleBtn}>
          Add
        </button>
      </span>
      {data.map((temp, index) => (
        <TodoApp key={index} temp={temp} remove={remove} edit={edit} />
      ))}
    </div>
  );
}

export default App;

