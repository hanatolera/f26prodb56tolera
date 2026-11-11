var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var festival_controller = require('../controllers/festivals');

router.get('/', api_controller.api);

router.post('/festivals', festival_controller.festival_create_post);
router.delete('/festivals/:id', festival_controller.festival_delete);
router.put('/festivals/:id', festival_controller.festival_update_put);
router.get('/festivals/:id', festival_controller.festival_detail);
router.get('/festivals', festival_controller.festival_list);

module.exports = router;