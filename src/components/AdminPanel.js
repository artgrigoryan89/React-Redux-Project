import React, {Component} from 'react';
import {Table, Button} from 'reactstrap';

export default class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {}
        };
        this.activeUsersBtnHandler = this.activeUsersBtnHandler.bind(this);
        this.removedUsersBtnHandler = this.removedUsersBtnHandler.bind(this);
        this.activateBtnHandler = this.activateBtnHandler.bind(this);
        this.removeBtnHandler = this.removeBtnHandler.bind(this);
    }

    componentWillMount(){
        this.state.users = this.props.getData('active');
    }

    componentWillReceiveProps(nextProps){
        this.setState(nextProps.data)
    }

    activeUsersBtnHandler() {
        this.props.getData('active');
    }

    removedUsersBtnHandler() {
        this.props.getData('removed');
    }

    activateBtnHandler(e) {
        let userLogin = e.target.id;
        this.props.activateUser(userLogin);
        this.props.getData('active');
    }

    removeBtnHandler(e) {
        let userLogin = e.target.id;
        let key = this.props.data.key;
        this.props.removeUser(userLogin, key);
        this.props.getData('removed');
    }

    createTable(data) {
        if(!data){
            return "";
        }
        let obj = data;
        let key;
        return Object.keys(obj).map(key => {
                let user = obj[key];
                if (this.state.key == "active") {
                    return (<tr key={user.login}>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.login}</td>
                        <td>{user.mail}</td>
                        <td>
                            <Button outline size="sm" color="secondary" id={user.login}  onClick={this.removeBtnHandler}>Remove</Button>
                        </td>
                    </tr>)
                }
                if (this.state.key == "removed") {
                    return (<tr key={user.login}>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.login}</td>
                        <td>{user.mail}</td>
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
                        <td>Mail Adress</td>
                    </tr>
                    {this.createTable(this.state.data)}
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
