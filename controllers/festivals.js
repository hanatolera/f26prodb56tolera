var Festival = require('../models/festival');

exports.festival_list = async function (req, res) {
    try {
        const theFestivals = await Festival.find();
        res.json(theFestivals);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
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

exports.festival_view_all_Page = async function (req, res) {
    try {
        const theFestivals = await Festival.find();
        res.render('festivals', {
            title: 'Festival Search Results',
            results: theFestivals
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};