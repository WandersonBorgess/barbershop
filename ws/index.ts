import express from 'express';
import morgan from 'morgan';

const app = express();

// MIDDLEWARES
app.use(morgan('dev'));
// VARIABLES
app.set('port', 8000);

app.listen(app.get('port'), () => {
  console.log(`ws listening at port ${app.get('port')}`);
});