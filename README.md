## Graphql and Apollo Server

### Just a simple example of using Graphql with Apollo Server

#### Commands

Install dependencies:

`yarn install`

Run server:

`node server`

Playground is available at:
`http://localhost:4001/__graphql`

Queries:
Example of queries:

```graphql
query {
  products {
    id,
    name,
    price
  }
}
```

Mutations:
Example of mutations:

```graphql
mutation CreateProduct {
  addProduct(id: "20", name: "Iphone 12", price: 10000) {
    id,
    name,
    price
  }
}
```
