const Habit = require('../models/habit');

exports.addNewHabit = async (req, res) => {
  const { name } = req.body;

  try {
    const newHabit = await Habit.create({ name });
    res.status(201).json(newHabit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find({});
    res.render('habitList', { habits });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getHabitDetails = async (req, res) => {
  const habitId = req.params.id;

  try {
    const habit = await Habit.findById(habitId);
    res.render('habitDetails', { habit });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.saveHabitStatus = async (req, res) => {
  const habitId = req.params.id;
  const { todayStatus } = req.body;

  try {
    const habit = await Habit.findById(habitId);
    habit.todayStatus = todayStatus;
    await habit.save();
    res.redirect(`/habits/${habitId}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
