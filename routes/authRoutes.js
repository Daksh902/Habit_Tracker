const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route to render the login form
router.get('/login', (req, res) => {
  res.render('login'); // Render the login view
});

// Route to handle POST requests to login
router.post('/login', authController.login);

module.exports = router;
