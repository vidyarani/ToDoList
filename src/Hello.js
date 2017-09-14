import React from 'react';

export default class Clock extends React.Component{
    constructor(){
        super();
        this.state = {timer: new Date(), True: true, Flase: false}
    }

    componentDidMount(){
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    tick(){
        this.setState({timer: new Date()});
    }

    render(){
        return this.state.True && (
            <div>
                <h1>{this.state.timer.toLocaleTimeString()}</h1>
                {this.state.True ? <h1>Hi</h1> : "Bye"}
            </div>
        )
    }
}
