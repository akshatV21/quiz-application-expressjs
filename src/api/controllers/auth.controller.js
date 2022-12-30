const UserModel = require('../models/user.model')

const httpRegisterUser = async (req, res, next) => {
  try {
    const user = new UserModel(req.user)
    await user.save()

    const { password, ...rest } = user._doc
    res.status(200).json({ success: true, data: { rest } })
  } catch (error) {
    next(error)
  }
}

module.exports = { httpRegisterUser }
