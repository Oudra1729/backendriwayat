const mongoose = require('mongoose');

const novelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: String,
},
 { timestamps: true }
);

module.exports = mongoose.model('Novel', novelSchema);
