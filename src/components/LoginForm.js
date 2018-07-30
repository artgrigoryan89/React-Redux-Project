import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Container, Row, Col, Card, Form, FormGroup, Label, Input} from "reactstrap";

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
        console.log(nextProps);
        this.props.history.push('/admin_panel');
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

                <Form onSubmit={this.onFormSubmit}>
                    <FormGroup>
                    <Label center>
                        Login </Label>
                        <Input type="text" placeholder="Enter Login" value={this.state.loginValue}
                               onChange={this.loginHandleChange} required/>
                    </FormGroup>
                    <FormGroup>
                    <Label>
                        Password </Label>
                        <Input type="password" placeholder="Enter Password" value={this.state.passwordValue}
                               onChange={this.passwordHandleChange} required/>
                    </FormGroup>
                    <FormGroup>
                    <Input className="logButton" type="submit" value="Login" />
                    </FormGroup>
                </Form>
                <NavLink className='link' to='/register'>Register</NavLink>
            </div>
        );
    }
}