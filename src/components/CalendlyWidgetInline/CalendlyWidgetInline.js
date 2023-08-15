import React, { Component } from "react";
import {PopupButton, PopupWidget} from "react-calendly";

class CalendlyWidgetInline extends Component {
    render() {
        return (
            <div className="CalendlyWidgetInline">
                <PopupWidget
                    url="https://calendly.com/sairambandi/30min/"
                    /*
                     * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                     * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                     */
                    rootElement={document.getElementById("root")}
                    text=" Click here to Schedule a meet !!"
                    textColor="#ffffff"
                    color="#00a2ff"
                />
            </div>
        );
    }
}

export default CalendlyWidgetInline;
