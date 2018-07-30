import React, {Component} from 'react';
import {Table, Button} from 'reactstrap';

export default class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.activeUsersBtnHandler = this.activeUsersBtnHandler.bind(this);
        this.removedUsersBtnHandler = this.removedUsersBtnHandler.bind(this);
        this.activateBtnHandler = this.activateBtnHandler.bind(this);
        this.removeBtnHandler = this.removeBtnHandler.bind(this);
    }

    activeUsersBtnHandler() {
        this.props.getActiveUsers();
    }

    removedUsersBtnHandler() {
        this.props.getRemovedUsers();
    }

    activateBtnHandler(e) {
        let userLogin = e.target.id;
        this.props.activateUser(userLogin);
    }

    removeBtnHandler(e) {
        let userLogin = e.target.id;
        let key = this.props.data.key;
        this.props.removeUser(userLogin, key);
    }

    createTable(data) {
        let obj = data.users;
        let key;
        return Object.keys(obj).map(key => {
                let user = obj[key];
                if (data.key == "active") {
                    return (<tr key={user.login}>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.login}</td>
                        <td>
                            <Button outline size="sm" color="secondary" id={user.login}  onClick={this.removeBtnHandler}>Remove</Button>
                        </td>
                    </tr>)
                }
                if (data.key == "removed") {
                    return (<tr key={user.login}>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.login}</td>
                        <td>
                            <Button outline size="sm" color="secondary" id={user.login} onClick={this.removeBtnHandler}>Remove</Button>
                        </td>
                        <td>
                            <Button outline size="sm" color="secondary" id={user.login} onClick={this.activateBtnHandler}>Activate
                            </Button>
                        </td>
                    </tr>)

                }
            }
        )
    }

    render() {
        return (
            <div className="admin">
                <Table striped size="sm">
                    <tbody>
                    <tr key="up">
                        <td>Name</td>
                        <td>Last Name</td>
                        <td>Login</td>
                    </tr>
                    {this.createTable(this.props.data)}
                    </tbody>
                </Table>
                <Button outline  size="sm" color="primary" key="activeusers" onClick={this.activeUsersBtnHandler} >Active Users
                </Button>{' '}
                <Button outline  size="sm" color="primary" key="removedusers" onClick={this.removedUsersBtnHandler}>Removed Users
                </Button>
            </div>
        );
    }
}
