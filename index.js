const { gql, ApolloServer } = require("apollo-server")
/*
const resolvers = {
    Query: {
        hello(){
            return 'World';
        }
    }
};
const typeDefs = gql`
    type Query{
        hello: String
    }

`;

const server = new ApolloServer({
    typeDefs,
    resolvers
});
*/

const typeDefs = gql`
    type Query{
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
        tecnologias: [String!]!
    }
`;

const resolvers = {
    Query: {
        idade(){
            return 18;
        },
        salario(){
            return 11234.45;
        },
        nome(){
            return "GraphQl";
        },
        ativo(){
            return true;
        },
        id(){
            return 12345;
        },
        tecnologias(){
            return ['CSS', 'GraphQL', 'ReactJS'];
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen()