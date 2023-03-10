import React, { Component } from 'react';
import {ErrorAlert} from "./Alert"


class NumberOfEvents extends Component {

  state={
    eventCount: 32,
    infoText: ''
  }

  handleInputChanged = (e)=>{
    const inputValue=e.target.value;
    
    if (inputValue<1 || inputValue>32) {
      this.setState({
        infoText: 'Please select number from 1 to 32'
      })
      
    } else {
      this.props.updateEvents(null, inputValue);
      this.setState({
        eventCount: inputValue,
        infoText:''
      })
    }
  }

  render() {
    return (
      <div className='NumberOfEvents'>
        <label for="number-of-events">Number of Events: </label>
      
        <input 
          type="number"
          id="number-of-events"
          className="number"
          min="1"
          value={this.state.eventCount}
          onChange={this.handleInputChanged}
         
        />
        <div className="error-alert">
        <ErrorAlert text={this.state.infoText} />
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;










// import React, { Component } from 'react'; //mine

// class NumberOfEvents extends Component {
//   state = { num: 32 };

//   changeNum(value) {
//     this.setState({ num: value });
//   }

//   render() {
//     const { num } = this.state;

//     return (
//       <input
//         className='num'
//         type='number'
//         value={num}
//         onChange={(event) => {
//           this.changeNum(event.target.value);
//         }}
//       >
//       </input>
//     );
//   }
// }

// export default NumberOfEvents;


// import React, { Component } from 'react';

// class NumberOfEvents extends Component {
//   state = { noe: 10 }

//   componentDidMount() {
//     this.setState({ noe: this.props.noe || 10 });
//   }

//   changeNOE(value) {
//     this.setState({ noe: value })
//   }

//   render() {
//     const { noe } = this.state;
//     return (
//     <div className="NumberOfEvents">
//         <h3>Number of Events:</h3>
//         <input
//           className="noe-input"
//           type="number"
//           value={noe}
//           onChange={event => {
//             this.changeNOE(event.target.value);
//           }}
//         >
//         </input>
//     </div>
//     )
//   }

// }

// export default NumberOfEvents;