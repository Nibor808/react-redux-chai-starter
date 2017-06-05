import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../actions/index';

class People extends Component {

  componentWillMount() {
    this.props.getPeople()
  }

  renderPeople(person) {
    return (
      <ul key={ person.name } className='list-group'>
        <li className='list-group-item'>name: { person.name }</li>
        <li className='list-group-item'>age: { person.age }</li>
        <li className='list-group-item list-group-item-info'>Address:</li>
        <li className='list-group-item'>city: { person.address.city }</li>
        <li className='list-group-item'>street: { person.address.street }</li>
      </ul>
    )
  }

  render() {
    if (!this.props.people) {
      return <div>Loading...</div>
    }

    return (
      <div className='row'>
        <div className='col-md-6'>
          {this.props.people.map( person => this.renderPeople(person) )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ people }) {
  return {
    ...people
  }
}

export default connect(mapStateToProps, { getPeople })(People);