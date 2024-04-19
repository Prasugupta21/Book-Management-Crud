const Book = require("../models/books");

const getBookController = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).send({
      message: "all books",
      books,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error",
      error: error.message,
    });
  }
};
const AddBooksController = async (req, res) => {
  try {
    const { name, author, price } = req.fields;

    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is required " });
      case !author:
        return res.status(500).send({ error: "author Name is required " });
      case !price:
        return res.status(500).send({ error: "Price is required " });
    }
    const book = new Book({
      ...req.fields,
    });

    await book.save();
    return res.status(201).send({
      book,
      message: "success",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in creating book",
      error: error.message,
    });
  }
};
const RemoveBooksController = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: "success",
      book,

      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Error in Deleting Book",
      error: error.message,
    });
  }
};
const UpdateBooksController = async (req, res) => {
  try {
    const { name, author, price } = req.fields;

    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is required " });
      case !author:
        return res.status(500).send({ error: "author Name is required " });
      case !price:
        return res.status(500).send({ error: "Price is required " });
    }
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        ...req.fields,
      },
      { new: true }
    );

    await book.save();
    return res.status(201).send({
      book,
      message: "success",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in creating book",
      error: error.message,
    });
  }
};

const getSingleBookController = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    console.log(book);
    return res.status(200).send({
      message: "success",
      success: true,
      book,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};
module.exports = {
  getBookController,
  RemoveBooksController,
  AddBooksController,
  UpdateBooksController,
  getSingleBookController,
};
