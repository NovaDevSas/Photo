exports.getUserStats = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate("followers following");
        const posts = await Post.find({ user: req.params.id });

        res.status(200).json({
            totalPosts: posts.length,
            totalFollowers: user.followers.length,
            totalFollowing: user.following.length,
            mostLikedPost: posts
                .sort((a, b) => b.likes.length - a.likes.length)[0],
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
