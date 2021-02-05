require('dotenv').config();
require('./config/database');

const Book = require('./models/book');

(async function() {
  await Book.deleteMany({});
  const books = await Book.create([
    {title: 'It\'s the 60s Man', genre: 'History', published: 1969},
    {title: '1984', genre: 'Political Dystopia', published: 1948},
    {title: 'Near and Far', genre: 'Cookbook', published: 2017},
    {title: 'Friends Forever: A Log of Every Episode of Friends', genre: 'History', published: 2020},
    {title: 'Ladders', genre: 'Instructional', published: 1992},
    {title: 'Joey: The Best Show Ever', genre: 'Media Studies', published: 2005},
  ]);

  process.exit();
})();