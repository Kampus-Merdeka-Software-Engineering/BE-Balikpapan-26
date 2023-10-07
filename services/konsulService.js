const { prisma } = require('../config/prisma');

async function getAllKonsuls() {
    try {
        const konsuls = await prisma.konsul.findMany();

        return konsuls;
    } catch (error) {
        console.error(error);

        throw new Error()
    }
}

async function createKonsul(konsul) {
    try {
        const mappedKonsul = {
            data: {
                no: konsul.no,
                name: konsul.name,
                phone: konsul.phone,
                tretment: konsul.treament,
                dokter: konsul.dokter,
                reservationdate: konsul.reservationdate,
                problem: konsul.problem

            }
        };

        const createdKonsul = await prisma.konsul.create(mappedKonsul);

        return createdKonsul
    } catch (error) {
        console.error(error);

        throw new Error()
    }
}

module.exports = {
    getAllKonsuls,
    createKonsul
};