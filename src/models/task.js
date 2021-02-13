const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
);

// middleware
taskSchema.pre('save', async function (next) {
  // console.log('before saving task');
  next();
});
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
