const User = require('../../models/user');
const jwt = require('jsonwebtoken');


module.exports = {
    create
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