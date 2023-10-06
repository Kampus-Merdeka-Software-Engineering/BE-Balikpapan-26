const { konsulService } = require('../services');

async function getKonsul(req, res) {
    const konsuls = await konsulService.getAllKonsuls();

    res.status(200).json(konsuls);
}

async function createKonsul(req, res) {
    const konsul = req.body;

    const createdKonsul = await konsulService.createKonsul(konsul);

    res.status(201).json({
        message: 'konsul created'
    });
}

module.exports = {
    getKonsul,
    createKonsul
};