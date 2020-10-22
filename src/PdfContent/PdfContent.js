import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { sampleRespone } from "./response";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import "./PdfContent.scss";

class PdfContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleRespone: sampleRespone
        };

    }

    renderHtmlFormat = () => {
        const { sampleRespone } = this.state;
        let renderHtml = {
            firstSet: {},
            secondSet: {},
            vehicleDetails: {},
            installedEquipment: {},
            StandardInstallationEquipment: {}
        };
        let firstfilter = sampleRespone.vehicleInfo.slice(0, 6);
        let secondFilter = sampleRespone.vehicleInfo.slice(6, 12);
        renderHtml.firstSet = firstfilter.map((info, index) => {
            return (
                <div className="eachInfo col-xs-12">
                    <div className="col-xs-6">
                        {info.label}
                    </div>
                    <div className="col-xs-6">
                        {info.value}
                    </div>
                </div>
            )
        });
        renderHtml.secondSet = secondFilter.map((info, index) => {
            return (
                <div className="eachInfo col-xs-12">
                    <div className="col-xs-6">
                        {info.label}
                    </div>
                    <div className="col-xs-6">
                        {info.value}
                    </div>
                </div>
            )
        });
        renderHtml.AdditionalVehicleDetails = sampleRespone.AdditionalVehicleDetails.map((info, index) => {
            return (
                <div className="eachInfo col-xs-12">
                    <div className="col-xs-6">
                        {info.label}
                    </div>
                    <div className="col-xs-6">
                        {info.value}
                    </div>
                </div>
            )
        });
        renderHtml.installedEquipment = sampleRespone.installedEquipment.map((info, index) => {
            return (
                <div className="eachInfo col-xs-12">
                    <div className="col-xs-6">
                        {info.label}
                    </div>
                    <div className="col-xs-6">
                        {info.value}
                    </div>
                </div>
            )
        });
        renderHtml.StandardInstallationEquipment = sampleRespone.StandardInstallationEquipment.map((info, index) => {
            return (
                <div className="eachInfo col-xs-12">
                    <div className="col-xs-6">
                        {info.title}
                    </div>
                    <div className="col-xs-6">
                        {info.desc}
                    </div>
                </div>
            )
        });
        return renderHtml;
    }

    render() {
        const {contentRef} = this.props;
        const renderHtml = this.renderHtmlFormat();
        return (
            <Fragment>
                <div className="col-xs-12 PaddingZero PdfContent displayFlex" style={{width: '100%'}}>                  
                    <div ref={contentRef}>
                        <div className="col-xs-12 PaddingZero">
                            <div className="col-xs-12 col-md-6 PaddingZero">
                                {renderHtml.firstSet}
                            </div>
                            <div className="col-xs-12 col-md-6 PaddingZero">
                                {renderHtml.secondSet}
                            </div>
                        </div>
                        <div className="col-xs-12 PaddingZero">
                            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                                <div className="col-xs-12 PaddingZero">
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            {"ADDITIONAL VEHICLE DETAILS"}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className="col-xs-12">
                                            {renderHtml.AdditionalVehicleDetails}
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </div>
                                <div className="col-xs-12 PaddingZero">
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                        <div className="col-xs-12">
                                                {renderHtml.installedEquipment}
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </div>
                                <div className="col-xs-12 PaddingZero">
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                        <div className="col-xs-12">
                                                {renderHtml.StandardInstallationEquipment}
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </div>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const connectedPdfContent = connect(null, {})(PdfContent);
export { connectedPdfContent as PdfContent };