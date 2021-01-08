import mongoose, { Document, Schema } from 'mongoose';

interface MessageInterface extends Document {
   content: string;
   datetime: Date;
   user: mongoose.Schema.Types.ObjectId,
}

const MessageSchema = new Schema({
   content: String,
   datetime: Date,
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   }
});

const MessageModel = mongoose.model<MessageInterface>('Message', MessageSchema);

export default MessageModel;
