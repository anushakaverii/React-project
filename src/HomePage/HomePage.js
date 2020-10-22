import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <Fragment>
                <div className="col-md-6 col-md-offset-3">
                    <h1>Hi {user.firstName}!</h1>
                    <p>You're logged in with React!!</p>
                    <h3>All registered users:</h3>
                    
                    <p>
                        <Link to="/login">Logout</Link>
                    </p>
                </div>
                <div className="col-xs-12 displayFlex JustifyContentEnd">
                    <div className="displayFlex JustifyContentStart">
                        <div className="col-md-6">
                            <input autoComplete="off" type="text"  placeholder="Search Workflows" className="form-control CustomTextBox" name="password" />
                        </div>
                    </div>
                    <div className="displayFlex JustifyContentEnd">
                        <button>{"Create Workflow"}</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };