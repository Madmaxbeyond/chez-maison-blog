const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get("/", ensureLoggedIn, booksCtrl.getAll);
router.post("/", ensureLoggedIn, booksCtrl.create);
router.get("/details/:id", ensureLoggedIn, booksCtrl.show);
router.put("/edit/:id", ensureLoggedIn, booksCtrl.update);
router.delete("/delete/:id", ensureLoggedIn, booksCtrl.delete);

module.exports = router;