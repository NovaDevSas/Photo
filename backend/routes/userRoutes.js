const express = require("express");
const { body } = require("express-validator");
const { registerUser, loginUser, getUserProfile } = require("../controllers/userController");
const validateRequest = require("../middleware/validateRequest");
const router = express.Router();
const { followUser, unfollowUser } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post(
    "/register",
    [
        body("alias").notEmpty().withMessage("El alias es obligatorio"),
        body("email").isEmail().withMessage("Debe ser un email válido"),
        body("password").isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
    ],
    validateRequest,
    registerUser
);

router.post("/login", loginUser);
router.get("/:id", getUserProfile);
router.post("/follow/:id", protect, followUser);
router.post("/unfollow/:id", protect, unfollowUser);
router.get("/:id/stats", protect, getUserStats); // Obtener estadísticas de usuario

module.exports = router;
