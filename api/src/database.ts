import mongoose from 'mongoose';

import mongoDB_URL from './config/mongoDB_URL';

export default class Database {
   static async connect() {
      try {
         const databaseURL = mongoDB_URL;

         return await mongoose.connect(databaseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
         })
      } catch (error) {
         return error;
      }
   }
   
   static async disconnect() {
      try {
         return await mongoose.disconnect();
      } catch (error) {
         return error;
      }
   }
}