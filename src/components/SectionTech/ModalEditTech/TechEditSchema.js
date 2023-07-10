import { z } from 'zod' 

export const TechEditSchema = z.object({
    title: z.string().nonempty('Insira a tecnologia'),
    status: z.string().nonempty('Selecione um status')
})