import mongoose from 'mongoose';
const URI = ''

mongoose.connect(URI).then(() => console.log('DB is UP!')). catch((err) => console.log(err));