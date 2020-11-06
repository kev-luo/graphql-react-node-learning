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
          <div className="portfolioCard" key={ project.id } onClick={ e => { this.setState({ selected: project.id })}}>
            <h3>{ project.name }</h3>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <div>
        <div className="container">
          { this.displayProjects() }
        </div>
        <Details projectId={ this.state.selected }/>
      </div>
    )
  }
}

export default graphql(getProjectsQuery)(portfolio);