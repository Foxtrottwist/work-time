import * as dotenv from 'dotenv';
import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as compression from 'compression';

dotenv.config();

const app = express();

app.use(morgan('combined'));
app.use(compression());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));

  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.get('/', (req, res) => {
  res.send({ message: 'Hello' });
});

app.listen(process.env.PORT, () =>
  // tslint:disable-next-line
  console.log(`Listening on ${process.env.PORT}`)
);
