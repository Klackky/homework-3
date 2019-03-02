import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addModel } from './actions/addModel'
import './App.css';

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {
  state = { computer: null };

  updateSelection = (event) => {
    const select = event.currentTarget;
    const selectedOption = select.options[select.selectedIndex].value;
    this.setState({
      computer: selectedOption
    })
  }

  addANewModel = () => {
   Object.keys(data).map(computer => {
    if(this.state.computer === computer) {
      this.props.addModel(computer, data[computer].year, data[computer].origin)
   }
  })
  }

  render() {
    return (
      <div className="App">
      <select onChange={this.updateSelection}>
       <option value="">-- pick a model --</option>
            {Object.keys(data).map(computer => 
              <option value={computer}>{computer} ({data[computer].year})</option>
            )} 
      </select>
      <button type="button"onClick={this.addANewModel}> add </button>
      </div>
    );
  }


}

const mapStateToProps = (state) => {
  return {
    computer: state
  }
}


export default connect(mapStateToProps, {addModel})(App);
