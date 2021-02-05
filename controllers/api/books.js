const Book = require('../../models/book');

module.exports = {
  getAll,
  create,
  show,
  update,
  delete: deleteOne
};

async function getAll(req, res) {
  const books = await Book.find({
    user: req.user._id
  });
  res.status(200).json(books);
}

async function create(req, res) {
  req.body.user = req.user._id
  const book = await Book.create(req.body);
  res.json(book);
}

async function show(req, res) {
  const book = await Book.findById({_id: req.params.id, user: req.user._id});
  res.json(book);
}

async function update(req, res) {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedBook);
}

async function deleteOne(req, res) {
  const bookId = await Book.findByIdAndRemove(req.params.id, req.body.user);
  res.json(bookId)
}