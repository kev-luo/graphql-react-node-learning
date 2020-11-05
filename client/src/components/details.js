import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { getProjectQuery } from '../queries/queries';

class details extends Component {
  displayProjectDetails() {
    const { project } = this.props.data;
    if (project) {
      return(
        <div>
          <h2>{ project.name }</h2>
          <p>{ project.description }</p>
          <h4>Skills and Other Projects: </h4>
          <ul>
            { project.skills.map(skill => {
              if (skill.projects.length > 1) {
                return (
                  <li>{ skill.name }
                    <ul>
                      { skill.projects.map(otherProject => {
                        if (otherProject.id !== project.id) {
                          return (
                            <li>{ otherProject.name }</li>
                          )
                        } else {
                          return
                        }
                      })}
                    </ul>
                  </li>
                )
              } else {
                return (
                  <li>{ skill.name }</li>
                )
              }
            }) }
          </ul>
        </div>
      )
    }
  }

  render() {
    console.log(this.props);
    return (
      <div id="book-details">
        { this.displayProjectDetails() }
      </div>
    )
  }
}

export default graphql(getProjectQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.projectId
      }
    }
  }
})(details);

