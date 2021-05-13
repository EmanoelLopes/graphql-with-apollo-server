const products = require('../api/products');

const resolvers = {
  Query: {
    products: () => products,
  },
  Mutation: {
    addProduct: (parent, args) => {
      const product = {
        id: args.id,
        name: args.name,
        price: args.price
      };
      products.push(product);
      return product;
    }
  },
};

module.exports = resolvers;