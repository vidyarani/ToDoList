import React, {Component}  from 'react';

export default class ToDoItem extends Component {
    deleteToDo(itemtitle){
        this.props.action(itemtitle);
    }

    completeToDo(itemtitle){
        this.props.completeAction(itemtitle);
    }

    render(){
       const isCompleted = this.props.isCompleted;
             return (
                   <div>
                     {isCompleted ? (
                       <span><strike>{this.props.title}</strike></span>
                     ) : (
                           <div>
                               <span>{this.props.title}</span>
                            <button onClick = {() => this.deleteToDo(this.props.title)}>Delete</button>
                            <button onClick = {() => this.completeToDo(this.props.title)}> Complete </button>
                           </div>
                         )}
                               </div>
                     );
             }
}