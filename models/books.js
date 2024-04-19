const { Schema, model } = require("mongoose"); // import Schema & model

const BookSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },

  price: { type: Number, required: true },
});

const Book = model("book", BookSchema);

module.exports = Book;
