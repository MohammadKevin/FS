import { PrismaClient} from"@prisma/client";
const prisma = new PrismaClient();

export const getTestimonials = async (req, res) => {
    try {
        const testimonials = await prisma.testimonials.findMany();
        res.status(200).json(testimonials);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const addTestimonials = async (req, res) => {
    try {
        const { descriptiontest, namePeople } = req.body;
        const testimonials = await prisma.testimonials.create({
            data: { descriptiontest, namePeople },
        });
        res.status(200).json(testimonials);
        console.log(testimonials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateTestimonials = async (req, res) => {
    try {
        const { descriptiontest, namePeople } = req.body;
        const firstData = await prisma.testimonials.findFirst();
        const testimonials = await prisma.testimonials.update({
            where: { id: firstData.id },
            data: { descriptiontest, namePeople },
        });
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteTestimonials = async (req, res) => {
    try {
        const testimonials = await prisma.testimonials.delete({
            where: { id: 1 },
        });
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}