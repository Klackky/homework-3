import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addModel } from './actions/addModel'
import ModelDetails from './components/modelDetails'
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
    this.setState({
      computer: event.currentTarget.value
    })
  }

  addANewModel = () => {
    Object.keys(data).map(computer => {
      if(this.state.computer === computer) {
        this.props.addModel(computer,data[computer].manufacturer, data[computer].year, data[computer].origin)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <ModelDetails computers={this.props.computers}/>
        <select onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
            {Object.keys(data).map(computer => 
              <option key={computer} value={computer}>{computer} ({data[computer].year})</option>
            )} 
        </select>
        <button type="button"onClick={this.addANewModel}> add </button>
      </div>
    );
  }


}

const mapStateToProps = (state) => {
  return {
    computers: state
  }
}


export default connect(mapStateToProps, {addModel})(App);
