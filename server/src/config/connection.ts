import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://dbParsa:mahmoudi2020@cluster0.fbtea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

export default mongoose.connection;
