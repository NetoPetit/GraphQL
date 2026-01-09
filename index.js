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
/*
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
});*/

const produtos = [
    {
        id: 1,
        nome: 'notebook',
        valor: 5.500
    },
    {
        id: 2,
        nome: 'tv',
        valor: 3.300
    }
]

const usuarios = [
    {
        id: 1,
        nome: 'Neto',
        idade: 37,
        salario: 1.500,
        ativo: true
    },
    {
        id: 2,
        nome: 'Joao',
        idade: 25,
        salario: 1.000,
        ativo: false
    }
]

const typeDefs = gql`
    type Produto{
        id: ID
        nome: String
        valor: Float
    }

    type Usuario{
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
        tecnologias: [String!]!
    }

    type Query{
        usuarios: [Usuario]
        produtos: [Produto]
    }
`;

const resolvers = {
    Query: {
        usuarios(){
            return usuarios;
        },
        produtos(){
            return produtos;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen()