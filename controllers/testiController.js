const { testiService } = require('../services');

async function getTestim(req, res) {
    const testim = await testiService.getAllTestim();

    res.status(200).json(testim);
}

async function createTesti(req, res) {
    const testi = req.body;

    const createdTesti = await testiService.createTesti(testi);

    res.status(201).json({
        message: 'testi created'
    });
}

module.exports = {
    getTestim,
    createTesti
};