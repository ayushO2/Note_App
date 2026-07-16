const Note = require("../models/Note");

// Create Note
const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Note
const updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Note
const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Note Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
};