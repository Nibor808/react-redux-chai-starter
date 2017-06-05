import React from 'react';
import { expect } from 'chai';
import { renderComponent } from '../test_helper';

import People from '../../components/people_component';

describe('People', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(People);
  });

  it('renders the People component', () => {
    expect(component.find('.list-group')).to.exist;
  });

  it('each list has 5 items', () => {
    expect(component.find('.list-group-item')).to.have.length === 5;
  });
});