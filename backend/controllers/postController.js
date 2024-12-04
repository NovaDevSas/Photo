const Post = require("../models/Post");

// Crear un post
exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        if (!title || !content) {
            return res.status(400).json({ message: "Título y contenido son obligatorios" });
        }
        const post = await Post.create({
            title,
            content,
            user: req.user.id, // Asociar el post al usuario autenticado
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todos los posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("user", "name email").populate("comments.user", "name");
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Añadir una reacción a un post
exports.addReaction = async (req, res) => {
    const { postId, emoji } = req.body;
    try {
        const post = await Post.findById(postId);
        if (!post) return res.status(404).json({ message: "Post no encontrado" });

        // Verificar si el usuario ya reaccionó
        const existingReaction = post.reactions.find((reaction) => reaction.user.toString() === req.user.id);
        if (existingReaction) {
            existingReaction.emoji = emoji; // Actualiza la reacción
        } else {
            post.reactions.push({ user: req.user.id, emoji });
        }

        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Añadir un comentario a un post
exports.addComment = async (req, res) => {
    const { postId, text } = req.body;
    try {
        const post = await Post.findById(postId);
        if (!post) return res.status(404).json({ message: "Post no encontrado" });

        post.comments.push({ user: req.user.id, text });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Agregar o quitar like
exports.toggleLike = async (req, res) => {
    const { postId } = req.body;
    try {
        const post = await Post.findById(postId);
        if (!post) return res.status(404).json({ message: "Post no encontrado" });

        const index = post.likes.indexOf(req.user.id);

        if (index === -1) {
            post.likes.push(req.user.id); // Agregar like
        } else {
            post.likes.splice(index, 1); // Quitar like
        }

        await post.save();
        res.status(200).json({ likes: post.likes.length });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
