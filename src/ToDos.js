import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from "./ToDoItem";

export default class ToDos extends Component {

    createToDoItems(){
        return this.props.todos.map((todo) => {
            return <ToDoItem title = {todo.name} id = {todo.id} action = {this.props.deleteToDoItem}
                completeAction = {this.props.completeToDoItem} isCompleted={todo.completed}
            />
        });
    }
    render(){
        return <div>
            {this.createToDoItems()}
        </div>
    }
}