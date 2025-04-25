const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type Post {
        _id: ID!
        title: String!
        content: String!
        image: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        posts: [Post!]!
    }

    type Auth {
        token: String!
        userId: String!
    }

    input LoginInputData {
        email: String!
        password: String!
    }

    input UserInputData {
        name: String!
        email:String!
        password:String!
    }

    input PostInputData {
        title: String!
        content: String!
        image: String!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
        loginUser(userInput: LoginInputData): Auth!
        createPost(postInput: PostInputData): Post!
    }

    type RootQuery {
        getAllPosts: [Post!]!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
