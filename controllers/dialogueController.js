import Dialogue from "../models/Dialogue.js";

class DialogueController {
  async createDialogue(req, res) {
    try {
      const isDialogueExists = await Dialogue.findOne({
        members: [req.body.senderId, req.body.recieverId],
      });

      if (isDialogueExists) {
        console.log("exists");
        return res.json({ message: "dialogue already exists" });
      }

      const newDialogue = new Dialogue({
        members: [req.body.senderId, req.body.recieverId],
      });
      const savedDialogue = await newDialogue.save();

      return res.status(200).json(savedDialogue);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "create dialogue error" });
    }
  }
  async getDialogues(req, res) {
    try {
      const dialogue = await Dialogue.find({
        members: { $in: [req.params.userId] },
      });

      return res.status(200).json(dialogue);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "cant find a dialogue with ur id..." });
    }
  }
}

export default new DialogueController();
