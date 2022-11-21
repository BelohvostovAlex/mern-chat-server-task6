import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
  dialogueId: { type: String },
  sender: { type: String },
  theme: { type: String },
  text: { type: String },
  sendTime: { type: Date, default: Date.now },
});

export default model("Message", MessageSchema);
