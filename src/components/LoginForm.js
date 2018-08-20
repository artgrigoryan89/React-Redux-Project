import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {Form, FormGroup, Label, Input} from "reactstrap";
import {Alert, Button, Nav, NavItem} from 'reactstrap';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginValue: '',
            passwordValue: '',
            errorMsgValue: '',
        };
        this.loginHandleChange = this.loginHandleChange.bind(this);
        this.passwordHandleChange = this.passwordHandleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.forgotBtnHandler = this.forgotBtnHandler.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.data) {
            this.props.history.push('/admin_panel');
        }
        else {
            this.setState({loginValue: '', passwordValue: '', errorMsgValue: 'Please insert correct login or password!'})
        }
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

    forgotBtnHandler(event) {
        this.props.forgotPassword(this.state.loginValue);
    }

    render() {
        return (
            <div className="formInput">
                <Alert color="primary" isOpen={true}>{this.state.errorMsgValue}</Alert>
                <Form>
                    <FormGroup>
                        <Label>
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
                        <Button onClick={this.onFormSubmit} className="logButton" type="submit" size="sm"> Login </Button>
                    </FormGroup>
                </Form>
                <Nav vertical>
                    <NavItem>
                        <NavLink className='link' to='/register'>Register</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='link' to='/getPassword'>Forgot password?</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}