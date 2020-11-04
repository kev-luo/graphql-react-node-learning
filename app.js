const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql'); // allows express to understand graphQL. provides simple way for express server to run the graphQL api. we do this by using it as middleware on a single route. this route will be like an endpoint to interact with our graphQL data

app.use('/graphql', graphqlHTTP({

})) // graphqlHTTP fxn handles the graphQL requests. this takes in some options inside an object

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`))