const { Schema, model } = require('mongoose')

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
})

UserSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject()

  return user
}

module.exports = model('User', UserSchema)
