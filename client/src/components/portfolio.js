import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { getProjectsQuery } from '../queries/queries';

// components
import Details from './details';

class portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    }
  }

  displayProjects() {
    let data = this.props.data;
    if(data.loading) {
      return (<div>Loading projects...</div>)
    } else {
      return data.projects.map(project => {
        return (
          <li key={ project.id } onClick={ e => { this.setState({ selected: project.id })}}>
            <h3>{ project.name }</h3>
          </li>
        );
      });
    }
  };
  render() {
    return (
      <div>
        <ul id="book-list">
          { this.displayProjects() }
        </ul>
        <Details projectId={ this.state.selected }/>
      </div>
    )
  }
}

export default graphql(getProjectsQuery)(portfolio);