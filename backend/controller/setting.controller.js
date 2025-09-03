import { PrismaClient} from"@prisma/client";
const prisma = new PrismaClient();

// Get all settings
export const getSettings = async (req, res) => {
    try {
        const settings = await prisma.settings.findFirst();
        res.status(200).json(settings);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add settings
export const addSettings = async (req, res) => {
    try {
        const { name, role, description } = req.body;
        const settings = await prisma.settings.create({
            data: { name, role, description },
        });
        res.status(200).json(settings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update settings
export const updateSettings = async (req, res) => {
    try {
        const { name, role, description } = req.body;
        const firstData = await prisma.settings.findFirst();
        const settings = await prisma.settings.update({
            where: { id: firstData },
            data: { name, role, description },
        });
        res.status(200).json(settings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete settings
export const deleteSettings = async (req, res) => {
    try {
        const settings = await prisma.settings.delete({
            where: { id: 1 },
        });
        res.status(200).json(settings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};