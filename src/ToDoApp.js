import React, {Component} from "react";
import ToDos from "./ToDos";
import AddToDo from "./AddToDo";

export default class ToDoApp extends Component {
    constructor(){
        super();
        this.state = {
            todos: [
                {name: 'Learn React', isCompleted: false},
                {name: 'Complete Project', isCompleted: false}
            ]
        };


        this.addToDoItem = this.addToDoItem.bind(this);
        this.deleteToDoItem = this.deleteToDoItem.bind(this);
        this.completeToDoItem = this.completeToDoItem.bind(this);
    }
    deleteToDoItem(item){
        var deleteFilter = todo => todo.name != item;
        this.setState(state => ({
                    todos: state.todos.filter(deleteFilter)
        }));
    }

    addToDoItem(item){
        let newItem = {name: item, isCompleted:false};
        this.setState({todos: this.state.todos.concat(newItem)});
    }

    completeToDoItem(item){
        /*var newList = [];
        for(let index = 0; index< this.state.todos.length; index++){
            if(this.state.todos[index].name == item)
             this.state.todos[index].isCompleted = true;
            newList.push(this.state.todos[index]);
        }
        this.setState({todos: newList});*/

        let updateToDoList = this.state.todos.map(
                                         (todo) => {
                                             if(todo.name == item)
                                                 todo.isCompleted = true;
                                             return todo;
                                             }
                                         );
        this.setState({todos: updateToDoList});
    }

    render(){
        return <div>
            <h1> TO DO </h1>
            <AddToDo callback = {this.addToDoItem}/>
            <ToDos todos = {this.state.todos} deleteToDoItem = {this.deleteToDoItem}
                completeToDoItem = {this.completeToDoItem}/>
            </div>;
    }
}