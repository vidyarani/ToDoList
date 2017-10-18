import React, {Component} from "react";
import ToDos from "./ToDos";
import AddToDo from "./AddToDo";

export default class ToDoApp extends Component {
    constructor(){
        super();
        this.state = {
            todos: []
        };

        this.addToDoItem = this.addToDoItem.bind(this);
        this.deleteToDoItem = this.deleteToDoItem.bind(this);
        this.completeToDoItem = this.completeToDoItem.bind(this);
        this.loadToDoList = this.loadToDoList.bind(this);
    }

    componentWillMount(){
     this.loadToDoList();
    }

    loadToDoList(){
        fetch('/list')
                    .then(result => result.json())
                    .then(todos => this.setState({todos: todos}));
    }

    deleteToDoItem(itemId){
        var self = this;
        fetch('/delete/'+ itemId, {method: "DELETE"})
            .then(function(response){
                self.loadToDoList();
            });
    }

    addToDoItem(itemName){
        var self = this;
        fetch('/add/' + itemName, {method: "POST"
            }).then(function(response){
                self.loadToDoList();
            })
    }

    completeToDoItem(itemId){
        var self = this;
        fetch('/complete/' + itemId, {method: "PATCH"
            }).then(function(response){
                self.loadToDoList();
            }
        );
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