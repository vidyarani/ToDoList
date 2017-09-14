import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from "./ToDoItem";

export default class ToDos extends Component {

    createToDoItems(){
        return this.props.todos.map((todo) => {
            return <ToDoItem title = {todo} action = {this.props.deleteToDoItem}/>
        });
    }
    render(){
        return <div>
            {this.createToDoItems()}
        </div>
    }
}