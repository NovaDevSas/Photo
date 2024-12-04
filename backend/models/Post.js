const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const ReactionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    emoji: { type: String, required: true }, // Ejemplo: 😀, ❤️, 👍
});

const PostSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    caption: { type: String },
    media: { type: String, required: true },
    reactions: [ReactionSchema],
    comments: [CommentSchema],
    createdAt: { type: Date, default: Date.now },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

});

module.exports = mongoose.model("Post", PostSchema);
