import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query {
    timers: [Timer]
}
type Timer {
    title: String,
    duration: Float
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
