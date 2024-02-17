// habitRoutes.js
const express = require('express');
const router = express.Router();
const habitController = require('../controllers/habitController');

router.get('/', habitController.getAllHabits);
router.get('/:id', habitController.getHabitDetails);
router.post('/', habitController.addNewHabit);
router.post('/:id/saveStatus', habitController.saveHabitStatus);

module.exports = router;
