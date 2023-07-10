import { z } from 'zod' 

export const FormLoginSchema = z.object({
    email: z.string().nonempty('O Email é obrigatório').email('O Email esta incorreto'),
    password: z.string().nonempty('Insira a Senha!'),
})