import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class details extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="book-details">
        <p>output book details</p>
      </div>
    )
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(details);
