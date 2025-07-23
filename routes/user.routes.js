const express = require('express');
// const { loginUser, createUser } = require('../controllers/userController');
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser,getuserbyId } = require('../controllers/user.controller');


router.get("/", getUsers);   
router.get("/:id", getuserbyId);   
router.post("/", createUser);     
router.put("/:id", updateUser);    
router.delete("/:id", deleteUser);


module.exports = router;
