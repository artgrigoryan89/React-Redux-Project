import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap';

export default class GetPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginValue: ''
        };

        this.loginHandleChange = this.loginHandleChange.bind(this);
        this.getPassBtnHandler = this.getPassBtnHandler.bind(this);
    }

    loginHandleChange(event) {
        this.setState({
            loginValue: event.target.value
        })
    }

    getPassBtnHandler(event) {
        event.preventDefault();
        this.props.getPassword(this.state.loginValue);
        this.setState({loginValue: ''});
    }

    render() {
        return (
            <div className="registerForm">
                <Form>
                    <FormGroup>
                        <Label>
                            Please Enter Login </Label>
                        <Input type="text" placeholder="Enter login" value={this.state.loginValue}
                               onChange={this.loginHandleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={this.getPassBtnHandler} className="getButton" type="submit" size="sm">Get
                            Password</Button>
                    </FormGroup>
                </Form>
                <div className="info">
                    <Label>
                        New Password </Label>
                    <Input type="text" value={this.props.data}/>
                </div>
            </div>

        )
    }

}

