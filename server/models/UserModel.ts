import mongoose from 'mongoose'
export interface UserDocument extends Document{
  email: String,
  password: String,
  name: String
}

const UserModelSchema = new mongoose.Schema({
  email: {
    type: String,
    required : true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  
  },
  password: {
    type: String,
    required: true,
    length: [8, 'Password must be at least 8 characters long']
  },
  name: {
    type: String,
    trim: true
  }
})
const User = mongoose.model<UserDocument>('User', UserModelSchema);
export default User