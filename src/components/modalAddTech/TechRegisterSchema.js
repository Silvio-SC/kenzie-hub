import { z } from 'zod' 

export const TechRegisterSchema = z.object({
    title: z.string().min(1, 'Insira a tecnologia'),
    status: z.string().nonempty('Selecione um status'),
})