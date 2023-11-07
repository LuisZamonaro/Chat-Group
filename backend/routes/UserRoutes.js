const express = require("express")
const router = express.Router()

// Controller
const {register, login, getCurrentUser, update, getUserById} = require("../controllers/UserController")

// Middlewares
const validate = require("../middleware/handleValidation")
const {userCreateValidation, loginValidation, userUpdatedValidation} = require("../middleware/userValidations")
const authGuard = require("../middleware/authGuard")
const { imageUpload } = require("../middleware/imageUpload")

// Routes
router.post("/register", userCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login)
router.get("/profile", authGuard, getCurrentUser)
router.put("/", authGuard, userUpdatedValidation(), validate, imageUpload.single("profileImage"), update)
router.get("/:id", getUserById)
router.get("/all-users")

module.exports= router