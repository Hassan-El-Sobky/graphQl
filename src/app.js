const { ApolloServer, gql } = require('apollo-server');



const posts = [
    {
      id: '1',
      title: 'Lorem22',
    },
    {
      id: '2',
      title: 'Hello from GraphQl',
    },
  ];
const typeDefs = gql`
  type Post {
    id: String
   title: String
  }
  type Query {
    posts: [Post]
  }

  
  type Mutation {
    addPost(title: String!): Post
  }
`;


const resolvers = {
    Query: {
      posts: () => posts,
    },
    Mutation: {
        createPost: (_, { title }) => {
          AllPosts.push({ id: AllPosts.length + 1, tile });
    
          return AllPosts[AllPosts.length - 1];
        },
    }
  };

  const Server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  Server.listen({
    port: 3000,
  }).then(()=>{console.log("listen at port 3000");})