import express from "express";
import prisma from "./lib/index.js";
const router = express.Router();
import authenticate from "./middleware/authenticate.js";

// GET ALL Books  GET: /api/Books
router.get("/", authenticate , async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    if (!books) {
      res.status(404).json({ message: "There is no any Book Found." });
    }
    res.status(200).json(books);
  } catch (error) {
    console.error(error.message);
  }
});

// GET SINGLE BOOK   GET: /api/Books/2
router.get("/:id", authenticate, async (req, res) => {
  try {
    const bookId = Number(req.params.id);
    const book = await prisma.book.findUnique({
      where: {
        id: bookId
      },
    });
    if (!book) {
      res
        .status(404)
        .json({ message: `Book with the id ${bookId} was not found.` });
    } else {
      res.status(200).json(book);
    }
  } catch (error) {
  
    res.status(500).json({ message: "Internal Server Error" });
  }
});


// ADD A BOOK     POST: /api/Books
router.post("/", authenticate , async (req, res) => {
  try {
    if (!req.body.title) {
      res.status(400).json({ message: "Please enter title of the Book" });
    }
    const book = await prisma.book.create({ data: req.body });
    res.status(201).json(book);
  } catch (error) {
    console.error(error.message);
  }
});

// UPDATING A BOOK    PUT: /api/Books/:id
router.put("/:id", authenticate, async (req, res) => {
  try {
    const bookId = Number(req.params.id);
    const updatedBook = await prisma.book.update({
      where: {
        id: bookId,
      },
      data: req.body,
    });

    if (!updatedBook) {
      res
        .status(404)
        .json({ message: `Book with the Id: ${bookId} was not found.` });
    } else {
      res.status(200).json(updatedBook);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


// DELETING A BOOK     DELETE: /api/Books/id
router.delete("/:id", authenticate , async (req, res) => {
  try {
    const book = await prisma.book.delete({
      where: {
        id: Number(req.params.id),
      }
    });
    
    res.status(200).json(`Book with the ID: ${req.params.id} was deleted successfully`);
  } catch (error) {
    console.error(error.message);
  }
});

export default router;
