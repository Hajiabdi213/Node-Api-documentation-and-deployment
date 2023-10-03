import express from "express";
import prisma from "./lib/index.js";
import authenticate from "./middleware/authenticate.js";
const router = express.Router();

// GET ALL   GET: /api/authors

// GET ALL BOOKSTORES   GET: /api/bookstores
router.get("/",authenticate, async (req, res) => {
  try {
    const bookstores = await prisma.bookStore.findMany();
    if (bookstores.length === 0) {
      res.status(404).json({ message: "There is no bookstore found." });
    } else {
      res.status(200).json(bookstores);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET SINGLE BOOKSTORE    GET: /api/bookstores/:id
router.get("/:id", authenticate, async (req, res) => {
  try {
    const bookstoreId = Number(req.params.id);
    const bookstore = await prisma.bookStore.findUnique({
      where: {
        id: bookstoreId,
      },
    });
    if (!bookstore) {
      res.status(404).json({ message: `Bookstore with the id ${bookstoreId} was not found.` });
    } else {
      res.status(200).json(bookstore);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ADD BOOKSTORE      POST: /api/bookstores
router.post("/", authenticate, async (req, res) => {
  try {
    const { name,location } = req.body;
    if (!name) {
      res.status(400).json({ message: "Please enter bookstore's name" });
    } else {
      const bookstore = await prisma.bookStore.create({
        data: {
          name: name,
          location:location
        },
      });
      res.status(201).json(bookstore);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// UPDATING A BOOKSTORE    PUT: /api/bookstores/:id
router.put("/:id", authenticate, async (req, res) => {
  try {
    const bookstoreId = Number(req.params.id);
    const updatedBookstore = await prisma.bookStore.update({
      where: {
        id: bookstoreId,
      },
      data: req.body,
    });
    if (!updatedBookstore) {
      res.status(404).json({ message: `Bookstore with the Id : ${bookstoreId} was not found.` });
    } else {
      res.status(200).json(updatedBookstore);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// DELETING A BOOKSTORE     DELETE: /api/bookstores/:id
router.delete("/:id", authenticate, async (req, res) => {
  try {
    const bookstoreId = Number(req.params.id);
    const deletedBookstore = await prisma.bookStore.delete({
      where: {
        id: bookstoreId,
      },
    });
    if (!deletedBookstore) {
      res.status(404).json({ message: `Bookstore with the ID: ${bookstoreId} was not found.` });
    } else {
      res.status(200).json({ message: `Bookstore with the ID: ${bookstoreId} was deleted successfully` });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


export default router;
