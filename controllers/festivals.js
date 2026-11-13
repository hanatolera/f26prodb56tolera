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


exports.festival_detail = async function (req, res) {
    console.log("detail " + req.params.id);
    try {
        let result = await Festival.findById(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(`{"error": "Document for id ${req.params.id} not found"}`);
    }
};


exports.festival_create_post = async function (req, res) {
    console.log(req.body);

    let document = new Festival();

    document.name = req.body.name;
    document.location = req.body.location;
    document.date = req.body.date;

    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": "${err.message}"}`);
    }
};


exports.festival_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Festival delete DELETE ' + req.params.id);
};


exports.festival_update_put = async function (req, res) {
    try {
        const result = await Festival.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!result) {
            return res.status(404).json({ error: "Festival not found" });
        }

        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
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