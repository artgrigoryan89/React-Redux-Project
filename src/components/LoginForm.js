import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginValue: '',
            passwordValue: ''
        };
        this.loginHandleChange = this.loginHandleChange.bind(this);
        this.passwordHandleChange = this.passwordHandleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

   /* componentWillMount() {
        this.handleLoad()
    }

    handleLoad() {
        window.activeUsers = new ActiveUsersService();
        window.removedUsers = new RemovedUsersService();
    }  */

    componentWillReceiveProps(nextProps){
        this.props.history.push('/admin_panel')
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

    onFormSubmit(event) {
        event.preventDefault();
        this.props.loginUser(this.state.loginValue, this.state.passwordValue);
        this.setState({loginValue: '', passwordValue: ''});
    }

    render() {
        return (
            <div className="formInput">
                <form onSubmit={this.onFormSubmit}>
                    <label>
                        Login
                        <input type="text" placeholder="Enter Login" value={this.state.loginValue}
                               onChange={this.loginHandleChange} required/>
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder="Enter Password" value={this.state.passwordValue}
                               onChange={this.passwordHandleChange} required/>
                    </label>
                    <input className="logButton" type="submit" value="Login" />
                </form>
                <NavLink to='/register'>Register</NavLink>
            </div>
        );
    }
}