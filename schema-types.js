const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    quotes: [Quote]
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    quotes: [Quote]
  }

  type Quote {
    category: String!
    desc: String!
    by: ID!
  }

  type Token {
    token: String!
  }

  type Mutation {
    signup(input: signupInput!): User
    signin(input: signinInput!): Token
    createQuote(input: quoteInput!): String
  }

  input signupInput {
    username: String!
    email: String!
    password: String!
  }

  input signinInput {
    email: String!
    password: String!
  }

  input quoteInput {
    category: String!
    desc: String!
  }
`;

module.exports = typeDefs;
