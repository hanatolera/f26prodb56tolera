var express = require('express');
const festival_controllers = require('../controllers/festivals');
var router = express.Router();

router.get('/', festival_controllers.festival_view_all_Page);

module.exports = router;