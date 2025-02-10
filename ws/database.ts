import mongoose from 'mongoose';
const URI = 'http://localhost:27017/vicent-barbershop'

mongoose.connect(URI).then(() => console.log('DB is UP!')). catch((err) => console.log(err));