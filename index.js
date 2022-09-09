// const { ApolloServer, gql } = require("apollo-server");
// const {
//   ApolloServerPluginLandingPageGraphQLPlayground,
// } = require("apollo-server-core/dist/plugin/landingPage/graphqlPlayground");

// const typeDefs = gql`
//   type Query {
//     hello: String
//     users: [User]
//     user(_id: ID!): User
//   }

//   type User {
//     _id: ID
//     username: String!
//     email: String!
//     password: String!
//     }
// `;

// const resolvers = {
//   Query: {
//     hello: () => "hyy",
//     users: async () => await User.find({}),
//     user: async (_, args) => await User.find({ _id: args._id }),
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
// });

// server.listen().then(({ url }) => {
//   console.log(`server ready at ${url}`);
// });
