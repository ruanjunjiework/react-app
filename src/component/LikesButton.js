import React, { Component } from 'react';

class LikesButton extends Component{
    constructor(){
        super()
        this.state = {
            likes:0
        }
    }
    increaseLikes(){
        this.setState({
            likes:++this.state.likes
        })
    }
    render(){
        return (
            <div>
                点赞:<p onClick={()=>{this.increaseLikes()}}>{this.state.likes}</p>
            </div>
        )
    }

}

export default LikesButton; 