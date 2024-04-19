const express = require("express");
const {
  getBookController,
  AddBooksController,
  RemoveBooksController,
  UpdateBooksController,
  getSingleBookController,
} = require("../controllers/books");
const formidableMiddleware = require("express-formidable");

const router = express.Router();

router.get("/get-books", getBookController);
router.get("/get-book/:id", getSingleBookController);
router.post("/add-books", formidableMiddleware(), AddBooksController);
router.delete("/remove-book/:id", RemoveBooksController);

router.put("/update-book/:id", formidableMiddleware(), UpdateBooksController);

module.exports = router;
