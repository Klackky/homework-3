import * as React from 'react'
import PropTypes from 'prop-types'

export default class ModelDetails extends React.Component {
  static propTypes = {
    computers: PropTypes.array.isRequired
  }

  render() {
const computers = this.props.computers;
    return (<div>
                {computers.map(computer => 
                  <ul key={Math.ceil(Math.random()*10000)}>
                    <li>Name: {computer.name}</li>
                    <li>Manufacturer: {computer.manufacturer}</li>
                    <li>Year: {computer.year}</li>
                    <li>Origin: {computer.origin}</li>
                  </ul>
                )}
            </div>)
  }
}

