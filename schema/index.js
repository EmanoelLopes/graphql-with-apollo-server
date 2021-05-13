const { gql } = require('apollo-server');

const schema = gql`
  type Product {
    id: String,
    name: String,
    price: Float,
  }

  type Query {
    products: [Product],
  }

  type Mutation {
    addProduct(id: String!, name: String!, price: Float!): Product
  }
`;

module.exports = schema;