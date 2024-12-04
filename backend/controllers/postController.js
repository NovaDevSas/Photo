const Post = require("../models/Post");

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
