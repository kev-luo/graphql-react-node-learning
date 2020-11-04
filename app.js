const express = require('express');
const app = express();
// allows express to understand graphQL. provides simple way for express server to run the graphQL api. we do this by using it as middleware on a single route. this route will be like an endpoint to interact with our graphQL data
const { graphqlHTTP } = require('express-graphql'); 
const schema = require('./schema/schema');

// schema used to map out the graph when someone makes a request to '/graphql'
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
})) // graphqlHTTP fxn handles the graphQL requests. this takes in some options inside an object

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`))