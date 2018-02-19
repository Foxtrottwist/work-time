import * as dotenv from 'dotenv';
import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as path from 'path';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import * as morgan from 'morgan';
import * as compression from 'compression';

import schema from './data/schema';

dotenv.config();

const PORT = process.env.PORT,
  app = express();

app.use(morgan('combined'));
app.use(compression());
// The GraphQL endpoint
app.use('/graphql', bodyparser.json(), graphqlExpress({ schema }));
// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));

  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send(`Go to localhost:${PORT}/graphiql`);
  });
}

app.listen(process.env.PORT, () =>
  // tslint:disable-next-line
  console.log(`Listening on port ${PORT}`)
);
