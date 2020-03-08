import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
    }
    componentDidMount() {
        this.refreshTodos();
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
            .then(response => {
                //console.log(response)
                this.setState({
                    todos: response.data
                })
            }
            )
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username);
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({
                        message: `Delete of todo ${id} Successful`
                    });
                    this.refreshTodos(); 
                }
            )
    }

    updateTodoClicked(id) {
       // console.log('update' + id)
        let username = AuthenticationService.getLoggedInUserName()
        console.log(id + " " + username);
        this.props.history.push(`/todos/${id}`)
        // TodoDataService.updateTodo(username, id)
        //     .then(
        //         response => {
        //             this.setState({
        //                 message: `Update of todo ${id} Successful`
        //             });
        //             this.refreshTodos(); 
        //         }
        //     )
    }

    render() {
        return <div>
            <h1>
                List Todos
            </h1>
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>

                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is completed</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo => <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                </tr>
                            )

                        }

                    </tbody>
                </table>
            </div>

        </div>
    }
}

export default ListTodosComponent