var Festival = require('../models/festival');


exports.festival_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Festival list');
};


exports.festival_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Festival detail: ' + req.params.id);
};


exports.festival_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Festival create POST');
};


exports.festival_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Festival delete DELETE ' + req.params.id);
};


exports.festival_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Festival update PUT ' + req.params.id);
};