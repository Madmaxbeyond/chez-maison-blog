const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {type: String, required: true},
  genre: {type: String, required: true},
  published: {type: Number, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
}, 
{ 
    timestamps: true 
});


module.exports = mongoose.model('Book', bookSchema);