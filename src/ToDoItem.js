import React, {Component}  from 'react';

export default class ToDoItem extends Component {
    deleteToDo(itemtitle){
        this.props.action(itemtitle);
    }

    render(){
        return <div>
            <span>{this.props.title} </span>
            <button onClick = {() => this.deleteToDo(this.props.title)}>Delete</button>
            </div>
    }
 }