import { model, Schema,models } from "mongoose";

const newUser=new Schema({
  username:{
    type:String,
    required:[true,"required"],
    unique:[true]
  },
  image:{
    type:String
  },
  email:{
    type:String,
    required:[true,"required"],
    unique:[true]
  }
})

const User=models.User||model('User',newUser)
export default User