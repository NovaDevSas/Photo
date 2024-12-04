const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
    const { alias, email, password } = req.body;
    try {
        const user = await User.create({ alias, email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.followUser = async (req, res) => {
    const { id } = req.params; // ID del usuario a seguir
    try {
        const userToFollow = await User.findById(id);
        const currentUser = await User.findById(req.user.id);

        if (!userToFollow) return res.status(404).json({ message: "Usuario no encontrado" });

        // Verificar si ya sigue al usuario
        if (currentUser.following.includes(id)) {
            return res.status(400).json({ message: "Ya sigues a este usuario" });
        }

        currentUser.following.push(id);
        userToFollow.followers.push(req.user.id);

        await currentUser.save();
        await userToFollow.save();

        res.status(200).json({ message: "Usuario seguido con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.unfollowUser = async (req, res) => {
    const { id } = req.params; // ID del usuario a dejar de seguir
    try {
        const userToUnfollow = await User.findById(id);
        const currentUser = await User.findById(req.user.id);

        if (!userToUnfollow) return res.status(404).json({ message: "Usuario no encontrado" });

        currentUser.following = currentUser.following.filter((userId) => userId.toString() !== id);
        userToUnfollow.followers = userToUnfollow.followers.filter((userId) => userId.toString() !== req.user.id);

        await currentUser.save();
        await userToUnfollow.save();

        res.status(200).json({ message: "Has dejado de seguir al usuario" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
