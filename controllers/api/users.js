const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login
};
  
async function create(req, res) {
  try {
    // Add user to db
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
    // error handling below
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const token = createJWT(user);
      res.json(token);
    } else {
      throw new Error();
    }
  } catch {
    res.status(400).json('Bad Credentials');
  }
}
  
  
/*-- Helper Functions --*/
  
function createJWT(user) {
  return jwt.sign(
    // first arg is the data payload
    { user },
    // second is secret token
    process.env.SECRET,
    // third is expiration time (this how long the token lasts, aka how long you're signed in)
    { expiresIn: '24h'}
  );
}  