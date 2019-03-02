import React, { Component } from 'react';
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
  render() {
    return (
      <div className="App">
      <select>
       <option value="">-- pick a model --</option>
       {Object.keys(data).map(car => 
             <option value={car}>{car} ({data[car].year})</option>
       )} 
      }
      </select>
      </div>
    );
  }
}

export default App;
