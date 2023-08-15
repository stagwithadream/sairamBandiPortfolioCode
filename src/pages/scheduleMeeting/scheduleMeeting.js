import React, { Component } from "react";
import { InlineWidget } from "react-calendly";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./scheduleMeeting.css";
class ScheduleMeeting extends Component {

    render() {
        const widgetStyles = {
            minWidth: "1500px",
            marginRight: "13rem",
            marginLeft: "13rem",
              height:"135vh",
             // marginTop: "-20px",
             overflow: "hidden",


            // Add any other styles you want here
        };
        const theme = this.props.theme;
        return (
            <div className="schedule-main">
                <Header theme={theme} />
                <div className="calendly_container">
                <div style={widgetStyles}>
                    <InlineWidget url="https://calendly.com/sairambandi/30min?hide_gdpr_banner=1" styles={{ height: "135vh", overflow: "hidden" }}
                    />
                </div>
                </div>
                <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
            </div>




        );
    }
}

export default ScheduleMeeting;
