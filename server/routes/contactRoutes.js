const express = require("express");
const router = express.Router();
const { contactOwner } = require("../controllers/contactController");

router.post("/:ownerId", contactOwner);

module.exports = router;
