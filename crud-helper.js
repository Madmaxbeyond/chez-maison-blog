// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Book = require('./models/book');
// const Genre = require('./models/genre');
// const Author = require('./models/author');
// const Type = require('./models/Type');

// Local variables will come in handy
let u, b, g, a, t;