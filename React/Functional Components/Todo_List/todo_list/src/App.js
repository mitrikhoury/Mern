import React , {useState} from "react"
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodos] = useState([]);
  const handleNewTodoSubmit = (event) =>{
    event.preventDefault();

    if(newTodo.length === 0){
      return ;
    }

    const todoItem = {
      text : newTodo ,
      complete : false
    }

    setTodos([...todo , todoItem]);
    setNewTodo("");
  }
  const  handleTodoDelete=( delIdx ) =>{
   const filteredTodos = todo.filter((todo , i) => {
     return i != delIdx;
   });
   setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) =>{
      const updatedTodos = todo.map((todo , i ) => {
        if(idx === i){
          todo.complete = !todo.complete;
        }
        return todo;
      });
      setTodos(updatedTodos);
  }
    return (
    <div>
     <form onSubmit={(event) =>{
      handleNewTodoSubmit(event);
     }}>
   <input onChange={ (event) =>{
   setNewTodo(event.target.value);
   } } type="text"
   value={newTodo}
   />
   <div>
    <button>Add</button>
   </div>
     </form>
      <br></br>
       
        {todo.map((todo , i) => {
          const todoClasses = [];
          if(todo.complete){
            todoClasses.push("line-through");
          }
          return ( <div key={i}>
            <input onChange={(event) => {
              handleToggleComplete(i);
            }}  checked={todo.complete} type="checkbox" />
            <span className={todoClasses.join(" ")}>{todo.text}</span>
            <button onClick={(event) => {
              handleTodoDelete(i);
            }}
            style={{marginLeft: "10px"}}
            >Delete</button>
          </div>);
        })
       }
     </div>
  );
}

export default App;
