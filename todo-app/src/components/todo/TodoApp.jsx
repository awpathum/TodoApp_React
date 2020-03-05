import React, { Component } from 'react';

class TodoApp extends Component{
    render(){
        return (
            <LoginComponent></LoginComponent>
        )
    }
}

class LoginComponent extends Component{

    render(){
        return(
            <div>
                Username : <input type="text" name="username" value="mamba"/>
                Password : <input type="password" name="password"/>
                <button>Login</button>
            </div>
        )
    }

}
export default TodoApp