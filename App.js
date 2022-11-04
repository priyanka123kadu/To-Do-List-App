import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todo';
import Addtodo from './components/AddTodo';

class App extends Component {
state = { 
  todos : [ 
    {id: 1, item: 'Reading a book'},
    {id: 2, item: 'Playing cricket'}
  ]
}
deleteTodo = (id) =>{
  const todos = this.state.todos.filter( todo => {
     return todo.id !== id; 
  })
  this.setState({
    todos
  })
}
 addTodo = (todo) => {
   todo.id = Math.floor(Math.random() * 50);
   let todos = [...this.state.todos, todo];
   this.setState({
     todos
   })
 } 
 
  render(){
    return (
      <div className="container">
        <h3 className='center purple-text'>MY TODO LIST</h3>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <Addtodo addTodo={this.addTodo} />
      </div>
    )

}

}
export default App;
