import React from "react";

class ToDo extends React.Component {

    state = {
        completed: this.props.task.completed
    }

    toggleCompleted = () => {
        this.setState(prevState =>({
            completed: !prevState.completed //égale à l'inverse de la variable completed
        }))
        this.props.onToggleCompleted(this.props.task.id)
    }

    render() {
        return (
            <li className={"list-group-item d-flex align-item-center " + (this.state.completed ? "bg-succes" : null)}>
                {this.props.task.name}
                <button className={"btn btn-sm ml-auto " + (this.state.completed ? "btn-success" : "btn-outline-success")} onClick = {() => this.toggleCompleted()}>&#x2713;</button>
            </li>
        )
    }
}

export default ToDo