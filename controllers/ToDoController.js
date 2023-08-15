const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text, description, status } = req.body;

  ToDoModel.create({ text, description, status, createdAt: new Date() }).then(
    (data) => {
      console.log("Added Successfully...");
      console.log(data);
      res.send(data);
    }
  );
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text, description, status } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text, description, status })
    .then(() => res.send("Updated Successfully"))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully"))
    .catch((err) => console.log(err));
};
