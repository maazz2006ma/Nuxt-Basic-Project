import mongoose from 'mongoose'
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
    minLength: 8
  },
  name: {
    type: String,
    trim: true
  }
})
const User = mongoose.model('User', UserModelSchema);
export default User