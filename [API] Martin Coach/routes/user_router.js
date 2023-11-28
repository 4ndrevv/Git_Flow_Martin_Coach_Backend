const express = require('express');
const userController = require('../controllers/user.controller');

const router_user = express.Router();

router_user.post("/", userController.add_user);

router_user.get("/:id", userController.show_user);
router_user.get("/", userController.show_all_user);

router_user.patch("/:id", userController.update_user);

router_user.delete("/:id", userController.delete_user);

module.exports = router_user;