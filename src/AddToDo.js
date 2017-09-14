import React, {Component}  from 'react';

export default class AddToDo extends Component {

    updateToDo(){
        this.props.callback(this.refs.itemText.value);
    }
    render(){
        return (<div>
            <input ref = "itemText" type = "text"/>
            <button onClick={() => this.updateToDo()}>Add</button>
            </div>
        );
    }
}
