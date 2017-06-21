import React, { Component } from 'react';
import People from './people_component';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>React/Redux Starter</h1>
        <div className='row'>
          <div className='col-sm-3'>
            <Link to='/people'>People</Link>
          </div>
          <div className='col-sm-3'>
            <Link to='/' className='pull-right'>Back</Link>
          </div>
        </div>
        <hr />
        {this.props.children}
      </div>
    )
  }
}