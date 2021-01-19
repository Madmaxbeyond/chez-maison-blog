const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Take care of Salting with bcrypt
SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true
    },
    // to use regex, use match
    // Create JS function to write custom validator
    password: {
      type: String,
      trim: true,
      minLength: 5,
      required: true
    },     
}, {
    timestamps: true,
    toJSON: {
        // doc = document, ret = return object
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

userSchema.pre('save', function(next) {
    // Save reference to the user doc
    const user = this;
    if (!user.isModified('password')) return next();
    // password has changed - hash and salt it with bcrypt
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        return next();
    });
});

module.exports = mongoose.model('User', userSchema);