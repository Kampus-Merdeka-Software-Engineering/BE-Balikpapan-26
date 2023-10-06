const { prisma } = require('../config');

async function getAllTestim() {
    try {
        const testim = await prisma.testi.findMany();

        return testim;
    } catch (error) {
        console.error(error);

        throw new Error()
    }
}

async function createTesti(testi) {
    try {
        const mappedTesti = {
            data: {
                name: testi.name,
                date: testi.date,
                mail: testi.mail,
                testimon: testi.testimon
            }
        };

        const createdTesti = await prisma.testi.create(mappedTesti);

        return createdTesti
    } catch (error) {
        console.error(error);

        throw new Error()
    }
}

module.exports = {
    getAllTestim,
    createTesti
};