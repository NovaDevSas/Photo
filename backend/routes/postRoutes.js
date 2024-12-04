const express = require("express");
const { createPost, getPosts, addReaction, addComment } = require("../controllers/postController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, createPost); // Crear un post
router.get("/", getPosts); // Obtener posts

// Nuevas rutas
router.post("/reaction", protect, addReaction); // Añadir reacción
router.post("/comment", protect, addComment); // Añadir comentario
router.post("/like", protect, toggleLike); // Agregar o quitar like

module.exports = router;
