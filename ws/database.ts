import mongoose, { ConnectOptions } from 'mongoose';
const URI = `mongodb://127.0.0.1:27017/beauty-salon`

mongoose.connect(URI,{
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  serverSelectionTimeoutMS: 5000 
 } as ConnectOptions).then(() => console.log('DB is UP!')). catch((err) => console.log(err));