const mongoose = require('mongoose')

const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  isElective: {
    type: Boolean,
    required: true
  },
  teacher: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('courses', coursesSchema)