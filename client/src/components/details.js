import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { getProjectQuery } from '../queries/queries';
import { Modal } from 'react-bootstrap';

class details extends Component {

  displayProjectDetails() {
    const { project } = this.props.data;
    if (project) {
      return(
        <>
          <Modal.Header>
            <Modal.Title>{ project.name }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{ project.description }</p>
            <h6>Skills and Other Projects: </h6>
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
          </Modal.Body>
        </>
      )
    } else {
      return(
        <>
          <Modal.Header closeButton>
            <Modal.Title>Project details loading...</Modal.Title>
          </Modal.Header>
        </>
      )
    }
  }

  render() {
    
    return (
      <>
        { this.displayProjectDetails() }
      </>
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

