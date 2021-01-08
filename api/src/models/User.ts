import mongoose, { Document, Schema } from 'mongoose';

interface UserInterface extends Document {
   username: string;
   email: string;
   password: string;
}

const UserSchema = new Schema({
   username: String,
   email: String,
   password: String,
});

const UserModel = mongoose.model<UserInterface>('User', UserSchema);

export default UserModel;
