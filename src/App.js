import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState((pre) => {
      const updatedTodos = pre.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return { todos: updatedTodos };
    });
  }

  render() {
    const todosItem = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    console.log(todosItem);
    return <div className="todo-list">{todosItem}</div>;
  }
}
export default App;
