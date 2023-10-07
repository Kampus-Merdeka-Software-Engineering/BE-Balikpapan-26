const { konsulService } = require('../services/konsulService');

async function getKonsuls(req, res) {
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
    getKonsuls,
    createKonsul
};