import React, { Component } from 'react';

class DigitalClock extends Component{
    constructor(){
        super();
        this.state = {
            time:new Date()
        }
    }
    getdate() {
        const now = new Date()
        return now.toTimeString().substr(0, 8);
    }
    render(){
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        )
    }
    componentDidMount(){
        var that = this
        this.timer = setInterval(function(){
            that.setState({
                    time:new Date()
            }) 
            
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    componentDidUpdate(currentProps,currentState){
        // console.log(currentState)
    }
}

export default DigitalClock;