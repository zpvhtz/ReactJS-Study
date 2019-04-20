import React, { Component } from 'react'

export default class TaskInput extends Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        const nextValue = event.target.value;

        this.setState({ value: nextValue });
    }

    handleKeyPress = (event) => {
        const value = this.state.value;
        
        if(event.key === 'Enter' && value.trim() !== '') {
            this.props.onTaskSubmit(value.trim());

            this.setState({ value: '' });
        }
    }

    render() {
        return (
            <div>
                <input
                    placeholder="Add task"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
            </div>
        )
    }
}
