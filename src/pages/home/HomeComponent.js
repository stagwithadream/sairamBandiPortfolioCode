import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import CalendlyWidgetInline from "../../components/CalendlyWidgetInline/CalendlyWidgetInline";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
          <CalendlyWidgetInline/>
          <Footer theme={this.props.theme} />

      </div>
    );
  }
}

export default Home;
