const { hashSync } = require('bcrypt')
const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
)

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()

  const hashedPassword = hashSync(this.password, 4)
  this.password = hashedPassword
  return next()
})

const UserModel = model('user', userSchema)

module.exports = UserModel
