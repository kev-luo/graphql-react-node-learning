import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { getProjectsQuery } from '../queries/queries';
import { Container, Modal } from 'react-bootstrap';

// components
import Details from './details';

class portfolio extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      selected: null,
      show: false,
    }
  }
  handleClose() {
    this.setState({show:false})
  }
  handleShow() {
    this.setState({show:true})
  }

  displayProjects() {
    let data = this.props.data;
    if(data.loading) {
      return (<div>Loading projects...</div>)
    } else {
      return data.projects.map(project => {
        return (
          <div className="portfolioCard" key={ project.id } onClick={ e => { this.setState({ selected: project.id, show: true}) }}>
            <h3>{ project.name }</h3>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <Container>
        <div className="container">
          { this.displayProjects() }
        </div>
        <Modal show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
          <Details setShow={ this.state.show} projectId={ this.state.selected }/>
        </Modal>
      </Container>
    )
  }
}

export default graphql(getProjectsQuery)(portfolio);