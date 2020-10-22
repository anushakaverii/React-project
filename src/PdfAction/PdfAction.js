import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Pdf from "react-to-pdf";

import { PdfContent } from "../PdfContent";


class PdfAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ref1: React.createRef()
        };
    }   

    render() {
        const { ref1 } = this.state;
        return (
            <Fragment>
                <div className="col-xs-5 PaddingZero">
                        {/* <Pdf targetRef={ref1} filename="code-example.pdf">
                            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                        </Pdf>
                        {ref1 && <PdfContent
                            contentRef={ref1}
                        />} */}
                </div>
            </Fragment>
        );
    }
}

const connectedPdfAction = connect(null, {})(PdfAction);
export { connectedPdfAction as PdfAction };