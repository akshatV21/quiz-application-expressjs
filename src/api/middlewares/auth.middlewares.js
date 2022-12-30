const { HttpRouteException } = require('../utils/exceptions')

const validateRegisterRoute = async (req, res, next) => {
  try {
    const { username, email, password } = req.body

    if (!username) throw new HttpRouteException(400, 'NullUsername')
    if (!email) throw new HttpRouteException(400, 'NullEmail')
    if (!password) throw new HttpRouteException(400, 'NullPassword')

    req.user = { username, email, password }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = { validateRegisterRoute }
