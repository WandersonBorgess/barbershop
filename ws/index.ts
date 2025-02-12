import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser'

import hallRoutes from './src/routes/hall.routes'

const app = express();

// BODYPARSER
app.use(bodyParser.json())

// MIDDLEWARES
app.use(morgan('dev'));

// VARIABLES
app.set('port', 8000);

// ROUTES
app.use('/hall', hallRoutes)

app.listen(app.get('port'), () => {
  console.log(`ws listening at port ${app.get('port')}`);
});