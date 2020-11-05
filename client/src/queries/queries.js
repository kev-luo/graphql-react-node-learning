import { gql } from 'apollo-boost';

const getProjectsQuery = gql`
{
  projects {
    name
    description
    id
  }
}
`
const getSkillsQuery = gql`
  {
    skills {
      name
      id
    }
  }
`
const getProjectQuery = gql`
query($id: ID) {
  project(id: $id) {
    id
    name
    description
    skills {
      name
      projects {
        name
        id
      }
    }
  }
}
`
// const addProjectMutation = gql`
//   mutation($name: String!, $genre: String!, $authorId: ID!) {
//     addBook(name:$name, genre:$genre, authorId:$authorId) {
//       name
//       id
//     }
//   }
// `
export { getProjectsQuery, getSkillsQuery, getProjectQuery };