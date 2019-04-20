import React, { Component } from 'react'

export default class TaskItem extends Component {
    render() {
        let task = this.props.task;

        //handleCheckChange = 

        return (
            <div>
                <input type="checkbox"/>{task}
            </div>
        )
    }
}
