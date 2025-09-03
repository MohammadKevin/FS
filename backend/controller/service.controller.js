import { PrismaClient} from"@prisma/client";
const prisma = new PrismaClient();

export const getServices = async (req, res) => {
    try {
        const services = await prisma.service.findMany();
        res.status(200).json(services);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const addServices = async (req, res) => {
    try {
        const { part, descriptionPart } = req.body;
        const services = await prisma.service.create({
            data: { part, descriptionPart },
        });
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateServices = async (req, res) => {
    try {
        const { id } = req.params;
        const { part, descriptionPart } = req.body;

        const service = await prisma.service.update({
            where: { id: Number(id) },
            data: { part, descriptionPart },
        });
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const deleteServices = async (req, res) => {
    try {
        const { id } = req.params;

        const service = await prisma.service.delete({
            where: { id: Number(id) },
        });
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};