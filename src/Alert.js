import React, { Component } from 'react';
import './App.css';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = 'blue';
    }
}

class ErrorAlert extends Alert{
    constructor(props){
        super(props);
        this.color= "red";
    
    }
}

class OfflineAlert extends Alert {
    constructor(props) {
      super(props);
      this.color='#e52f5e';
    }
}

export { InfoAlert };
export {ErrorAlert};
export {OfflineAlert};
  