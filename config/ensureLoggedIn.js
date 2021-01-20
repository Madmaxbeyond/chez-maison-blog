module.exports = function(req, res, next) {
    // Status code of 401 is Unauthorized
    if (!req.user) return res.status(401).json('This is not the page you\'re looking for.');
    // A okay
    next();
  };