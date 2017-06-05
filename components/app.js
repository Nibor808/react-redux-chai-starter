import React, { Component } from 'react';
import People from './people_component';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React/Redux Starter</h1>
        <div>
          <Link to='/people'>People</Link>
        </div>
        <div>
          <Link to='/'>Back</Link>
        </div>
      </div>
    )
  }
}