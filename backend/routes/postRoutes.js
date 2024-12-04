const express = require("express");
const {
    createPost,
    getPosts,
    addReaction,
    addComment,
    toggleLike, // Asegúrate de que esta función esté definida y exportada en postController.js
} = require("../controllers/postController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Rutas
router.post("/", protect, createPost); // Crear un post
router.get("/", getPosts); // Obtener posts

// Nuevas rutas
router.post("/reaction", protect, addReaction); // Añadir reacción
router.post("/comment", protect, addComment); // Añadir comentario
router.post("/like", protect, toggleLike); // Agregar o quitar like

module.exports = router;
