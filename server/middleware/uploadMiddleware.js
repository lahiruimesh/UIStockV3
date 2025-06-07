const multer = require('multer');
const path = require('path');

// Storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // folder to store uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique name with original extension
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
