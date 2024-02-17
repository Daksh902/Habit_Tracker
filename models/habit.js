const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  todayStatus: {
    type: String,
    enum: ['done', 'not-done', 'none'],
    default: 'none',
  },
  previousStatus: [{
    type: String,
    enum: ['done', 'not-done', 'none'],
    default: 'none',
  }],
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
