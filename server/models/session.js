const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const sessionSchema = new Schema({
  token: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
},
{
  timestamps: true,
});


const Session = model('Session', sessionSchema);


module.exports = Session;
