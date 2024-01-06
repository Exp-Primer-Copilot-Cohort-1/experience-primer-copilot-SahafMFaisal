// Create web server
// 1. Import express
const express = require("express");
// 2. Create router object
const router = express.Router();
// 3. Import comment controller
const commentController = require("../controllers/comments");
// 4. Import validator
const validator = require("../validators/comments");
// 5. Import auth
const { auth } = require("../utils/auth");

// 6. Create routes
router.get("/", commentController.getComments);
router.get("/:id", commentController.getComment);
router.post("/", validator.validateComment, auth, commentController.createComment);
router.put("/:id", validator.validateComment, auth, commentController.updateComment);
router.delete("/:id", auth, commentController.deleteComment);

// 7. Export router
module.exports = router;