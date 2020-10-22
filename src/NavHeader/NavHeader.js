import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import "./NavHeader.scss";

class NavHeader extends Component {
    render() {
       
        return (
            <Fragment>
                <div className="NavHeader col-xs-12">
                    <h2 className="AlignLeft">FLOWAPP</h2>
                </div>
            </Fragment>
        );
    }
}


const connectedNavHeader = connect(null, {})(NavHeader);
export { connectedNavHeader as NavHeader };