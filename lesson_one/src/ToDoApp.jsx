import React from 'react'

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';

export default class ToDoApp extends React.Component {
    state = {
        tasks: [],
    }

    handleTaskSubmit = (task) => {        
        this.setState({ tasks: this.state.tasks.concat([
                {
                    value: task,
                    checked: false
                }
            ])
        });
    }

    render() {
        return (
            <div>
                <h2 style = {{ marginBottom: 24 }}>ToDoApp</h2>

                <TaskInput onTaskSubmit={this.handleTaskSubmit}/>
                <div>0/{this.state.tasks.length}</div>
                
                <div style={{ marginTop: 24 }}>
                    {this.state.tasks.map((task, idx) => (
                        <TaskItem key={idx} task={task}/>
                    ))}
                </div>
            </div>
        )
    }
}