const graphql = require('graphql');

// schema files define types (eg BookType), relationships between types, and defining root queries (defines how we initially get into the graph to grab data)

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql; // destructuring

// this is a fxn that takes in an object that defines the BookType. this will be the first object type in our 'graph'. each book will have an id, name, and genre field
const BookType = new GraphQLObjectType({ 
  name: 'Book',
  // fields is a fxn. fields will be things like name, genre, id, etc. this needs to be a fxn because when we start defining multiple types and they have references to one another, one type might not know what another type is unless the fields of all the different types are wrapped within a fxn. the function returns an object
  fields: () => (
    { 
      id: { type: GraphQLString },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
    }
  )
})

// the RootQuery fields defines the options we can use to initially jump into the graph
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  // each of the fields will be a type of root query (eg grabbing one book, one author, multiple books, multiple authors, etc)
  fields: { 
    book: {
      type: BookType,
      // when we query for 'book' we need to pass along an argument. in this case an id that will be a graphql string
      args: {
        id: { type: GraphQLString }
      }, 
      // code to get data from db/other source. parent will come into play when we look at relationships between data types
      resolve(parent, args) {

      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})