import mongoose from 'mongoose';

export default class Database {
   static async connect() {
      try {
         const mongoURL = 'mongodb+srv://stoneparker:airotiv098@cluster0.z4mup.mongodb.net/Tests?retryWrites=true&w=majority';

         return await mongoose.connect(mongoURL, {
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