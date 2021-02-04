// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{

    delayedClick = (event) => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)}, this.props.delay) 
    }
    
    render(){
        return(
            <button onClick={this.delayedClick}>

            </button>
        )
    }
}