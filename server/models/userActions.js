const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userActionsSchema = new Schema({
  token: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
},
{
  timestamps: true,
});

const UserActions = model('UserActions', userActionsSchema);


module.exports = UserActions;
