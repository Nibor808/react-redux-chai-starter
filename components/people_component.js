import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../actions/index';

class People extends Component {

  componentWillMount() {
    this.props.getPeople()
  }

  renderPeople(person) {
    return (
      <ul key={ person.name }>
        <li>{ person.name }</li>
        <li>{ person.age }</li>
        <li>{ person.address.city }</li>
        <li>{ person.address.street }</li>
      </ul>
    )
  }

  render() {
    if (!this.props.people) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <div>
          <h1>React/Redux Starter</h1>
        </div>
        <div>
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