const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        product: [Product]
        order: [Order]
    }

    type Product {
        id: ID!
        description: String!
        price: Float!
        review: [Review]
    }

    type Order {
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        quantity: Int!
        product: Product
    }

    type Review {
        rating: Float!
        comment: String
    }
`);

const root = {
    product: [
        {
            id: 'red shoe',
            description: 'Red Shoe',
            price: 44.4 
        }   
    ],
    order: [
        {
            subtotal: 90.2,
            items:[
                {
                    quantity: 2,
                    product: {
                        id: 'black shirt',
                        description: 'Black Shirt',
                        price: 45.1,
                        review: [
                            {
                                rating: 4.6
                            }
                        ]
                    }
                }
            ]
        }
    ]
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000, () => 'GraphQL server has been set up');