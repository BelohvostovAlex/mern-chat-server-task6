import { Schema, model } from "mongoose";

const DialogueSchema = new Schema({
  members: { type: Array },
});

export default model("Dialogue", DialogueSchema);
