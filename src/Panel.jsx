import React, { Component } from "react";

class Panel extends Component {
    render() {
        return (
            <div className="Panel">
                <img src={this.props.icon}></img>
                <h4>{this.props.title}</h4>
                <h5>{this.props.description}</h5>
            </div>
        );
    }
}

export default Panel;