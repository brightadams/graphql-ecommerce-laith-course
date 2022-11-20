const {ApolloServer,gql} = require('apollo-server');
const {typeDefs} = require('./schema')
const {db} = require('./db');
const {Query} = require("./resolvers/Query")
const {Mutation} = require("./resolvers/Mutation")
const {Category} = require("./resolvers/Category")
const {Product} = require("./resolvers/Product")

const resolvers = {
    Query,
    Mutation,
    Product,
    Category
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        db
    }
});


server.listen().then(({url})=>{
    console.log('Server is ready at '+ url);
})