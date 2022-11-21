import Message from "../models/Message.js";

class MessageController {
  async createMessage(req, res) {
    try {
      const newMessage = new Message(req.body);
      const savedMessage = await newMessage.save();

      return res.status(200).json(savedMessage);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "create dialogue error" });
    }
  }

  async getMessages(req, res) {
    try {
      const allMessages = await Message.find({
        dialogueId: req.params.dialogueId,
      });

      return res.status(200).json(allMessages);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "create dialogue error" });
    }
  }
}

export default new MessageController();
