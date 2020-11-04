const graphql = require('graphql');
const _ = require('lodash');

// schema files define types (eg BookType), relationships between types, and defining root queries (defines how we initially get into the graph to grab data)

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql; // destructuring

const dummyDataBooks = [
  {name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1'},
  {name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2'},
  {name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3'}
];

const dummyDataAuthors =  [
  {name: 'Patrick Rothfuss', age: 44, id:"1"},
  {name: 'Brandon Sanderson', age: 42, id:"2"},
  {name: 'Terry Pratchett', age: 66, id:"3"},
]

// this is a fxn that takes in an object that defines the BookType. this will be the first object type in our 'graph'. each book will have an id, name, and genre field
const BookType = new GraphQLObjectType({ 
  name: 'Book',
  // fields is a fxn. fields will be things like name, genre, id, etc. this needs to be a fxn because when we start defining multiple types and they have references to one another, one type might not know what another type is unless the fields of all the different types are wrapped within a fxn. the function returns an object
  fields: () => ({ 
      id: { type: GraphQLID }, // allows flexibility with id, you can pass it as a string or integer
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      author: {
        type: AuthorType,
        resolve(parent, args) { // the parent data contains the info of the book we queried for. that info can contain the authorId which we can use to reference the authors data
          console.log(parent);
          return _.find(dummyDataAuthors, { id: parent.authorId })
        }
      }
    })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt }
    })
});

// the RootQuery fields defines the options we can use to initially jump into the graph
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  // each of the fields will be a type of root query (eg grabbing one book, one author, multiple books, multiple authors, etc)
  fields: { 
    book: {
      type: BookType,
      // when we query for 'book' we need to pass along an argument. in this case an id that will be a graphql string
      args: {
        id: { type: GraphQLID }
      }, 
      // code to get data from db/other source. parent will come into play when we look at relationships between data types
      // the args defined above can be accessed inside the resolve fxn using dot notation (eg args.id). so when a book query is received, the resolve fxn will be called and inside is where we write code to search the db/other source
      resolve(parent, args) {
        return _.find(dummyDataBooks, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return _.find(dummyDataAuthors, { id: args.id });
      }
    }
  }
});

// creates new graphql schema and defining which query we're allowing the user to use when they're making queries from the front end
module.exports = new GraphQLSchema({
  query: RootQuery
});