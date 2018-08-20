import React, {Component} from 'react';
import {Container, Row, Col, Card, Form, FormGroup, Label, Input, Button} from "reactstrap";

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            lastNameValue: '',
            loginValue: '',
            passwordValue: '',
            mailValue: '',
        };
        this.nameHandleChange = this.nameHandleChange.bind(this);
        this.lastNameHandleChange = this.lastNameHandleChange.bind(this);
        this.loginHandleChange = this.loginHandleChange.bind(this);
        this.passwordHandleChange = this.passwordHandleChange.bind(this);
        this.mailHandleChange = this.mailHandleChange.bind(this);
        this.registerButtonHandler = this.registerButtonHandler.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data.res) {
            this.props.history.push('/admin_panel');
        }
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

   mailHandleChange(event) {
        this.setState({
            mailValue: event.target.value
        })
    }

    registerButtonHandler(event) {
        event.preventDefault();
        this.props.registerUser(this.state.nameValue, this.state.lastNameValue, this.state.loginValue, this.state.passwordValue, this.state.mailValue);
        this.setState({nameValue: '', lastNameValue: '', loginValue: '', passwordValue: '', mailValue: ''});
    }

    render() {
        return (
            <div className="registerForm">
                <Form>
                    <FormGroup>
                        <Label>
                            First Name </Label>
                        <Input type="text" placeholder="Enter Name" value={this.state.nameValue}
                               onChange={this.nameHandleChange}/>

                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Last Name </Label>
                        <Input type="text" placeholder="Enter Login" value={this.state.lastNameValue}
                               onChange={this.lastNameHandleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Login </Label>
                        <Input type="text" placeholder="Enter Login" value={this.state.loginValue}
                               onChange={this.loginHandleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Password </Label>
                        <Input type="password" placeholder="Enter Password" value={this.state.passwordValue}
                               onChange={this.passwordHandleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Mail </Label>
                        <Input type="text" placeholder="Enter Mail" value={this.state.mailValue}
                               onChange={this.mailHandleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={this.registerButtonHandler} className="logButton" type="submit" size="sm"> Register </Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}