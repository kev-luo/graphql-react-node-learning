import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { getAuthorsQuery, addProjectMutation, getBooksQuery } from '../queries/queries';

class addProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      authorId: '',
    }
  }

  displayAuthors() {
    let data = this.props.getAuthorsQuery;
    if(data.loading) {
      return (<option>Loading authors</option>)
    } else {
      return data.authors.map(author => {
        return (
          <option key={ author.id } value={ author.id }>{ author.name }</option>
        )
      })
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addNew({
      variables: {
        name: this.state.name,
        genre: this.state.description,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    })
    
  }

  render() {
    return (
      <form id="add-book" onSubmit={ this.submitForm.bind(this) }>
        <div className="field">
          <label>Project Name: </label>
          <input type="text" onChange={ e => this.setState({ name: e.target.value })}/>
        </div>
        <div className="field">
          <label>Project Description: </label>
          <textarea type="text" onChange={ e => this.setState({ description: e.target.value })}/>
        </div>
        <div className="field">
          <label>Project Name: </label>
          <select onChange={ e => this.setState({ authorId: e.target.value })}>
            <option>Select author</option>
            { this.displayAuthors() }
          </select>
        </div>
        <button>+</button>
      </form>
    )
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addProjectMutation, { name: "addNew" })
)(addProject);