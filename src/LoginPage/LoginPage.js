import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import Pdf from "react-to-pdf";

import { PdfAction } from "../PdfAction";


import "./Login.scss";


class LoginPage extends Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <Fragment>
                <div className="col-xs-12 PaddingZero displayFlex">
                    <div className="LoginPage col-md-4 col-sm-8 col-xs-12">
                        <h2 className="AlignCenter">Login</h2>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={`form-group MarginBottom + ${submitted && !username ? ' has-error' : ''}`}>
                                <input autoComplete="off" type="text" placeholder="Email" className="form-control CustomTextBox" name="username" value={username} onChange={this.handleChange} />
                                {submitted && !username &&
                                    <div className="help-block">Username is required</div>
                                }
                            </div>
                            <div className={`form-group MarginBottom + ${submitted && !password ? ' has-error' : ''}`}>
                                <input autoComplete="off" type="password"  placeholder="Password" className="form-control CustomTextBox" name="password" value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group LoginButton">
                                <button className="btn btn-primary LoginButton">Login</button>
                            </div>
                            <div className="form-group AlignCenter">                      
                                <Link to="/register" className="btn btn-link">Don't have an account?. Sign up here</Link>
                            </div>
                        </form>
                    </div>
                    <PdfAction />
                </div>
            </Fragment>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };