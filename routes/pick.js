var express = require('express');
var router = express.Router();

/* GET random item page. */
router.get('/', function(req, res, next) {
  const images = [
    'timkat.jpg',
    'meskel.jpg',
    'irrecha.jpg',
    'ashenda.jpg',
    'genna.jpg'
  ];

  // Shuffle the images and select three different ones
  const shuffled = [...images];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const selectedImages = shuffled.slice(0, 3);

  res.render('randomitem', {
    title: 'A random item',
    images: selectedImages
  });
});

module.exports = router;