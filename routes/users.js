const express = require('express');
const router = require('express').Router();
const usersController = require('../controllers/users');
// const { checkJwt } = require('../middlewares/auth');

router.post('/addusers', usersController.newUser);
router.get('/getusers', usersController.getUser);
router.put('/updateusers/:id', usersController.updateUser);
router.delete('/deleteusers/:id', usersController.deleteUser);

module.exports = router;