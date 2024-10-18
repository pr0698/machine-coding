import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import ListTodos from './components/ListTodos';
import "./App.css";


function App(){
  return (
    <center className="todo-container">
          <AppName></AppName>
          <AddTodo></AddTodo>
          <ListTodos></ListTodos>

    </center>
  )
}


export default App;