const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

//users
router.get('/login', usersController.login); 
router.get('/register', usersController.register); 

router.get('/admin?users', usersController.admin); 
router.post('/admin/login', usersController.admin_login); 

router.get('/admin/pannel', usersController.pannel); 


module.exports = router;