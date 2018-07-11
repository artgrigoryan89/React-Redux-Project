import React, { Component } from 'react';

export default  class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            lastNameValue: '',
            loginValue: '',
            passwordValue: ''
        };
        this.nameHandleChange = this.nameHandleChange.bind(this);
        this.lastNameHandleChange = this.lastNameHandleChange.bind(this);
        this.loginHandleChange = this.loginHandleChange.bind(this);
        this.passwordHandleChange = this.passwordHandleChange.bind(this);
        this.registerButtonHandler = this.registerButtonHandler.bind(this);
    }

    nameHandleChange(event) {
        this.setState({
            nameValue: event.target.value
        })
    }

    lastNameHandleChange(event) {
        this.setState({
            lastNameValue: event.target.value
        })
    }

    loginHandleChange(event) {
        this.setState({
            loginValue: event.target.value
        })
    }

    passwordHandleChange(event) {
        this.setState({
            passwordValue: event.target.value
        })
    }

    registerButtonHandler(event) {
        event.preventDefault();
        this.props.registerUser(this.state.nameValue, this.state.lastNameValue, this.state.loginValue, this.state.passwordValue);
        this.setState({nameValue: '', lastNameValue: '', loginValue: '', passwordValue: ''});
    }

    render() {
        return (
            <div className="registerForm">
                <form onSubmit={this.registerButtonHandler}>
                    <label>
                        First Name
                        <input type="text" placeholder="Enter Name" value={this.state.nameValue}
                               onChange={this.nameHandleChange}/>
                    </label>
                    <label>
                        Last Name
                        <input type="text" placeholder="Enter Login" value={this.state.lastNameValue}
                               onChange={this.lastNameHandleChange}/>
                    </label>
                    <label>
                        Login
                        <input type="text" placeholder="Enter Login" value={this.state.loginValue}
                               onChange={this.loginHandleChange}/>
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder="Enter Password" value={this.state.passwordValue}
                               onChange={this.passwordHandleChange}/>
                    </label>
                    <input className="logButton" type="submit" value="Register"/>
                </form>
            </div>
        )
    }
}