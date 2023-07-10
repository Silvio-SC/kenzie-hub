import { z } from 'zod' 

export const FormRegisterSchema = z.object({
    name: z.string().min(1, 'Insira seu nome'),
    email: z.string().nonempty('O Email é obrigatório').email('O Email esta incorreto')  ,
    password: z.string().min(8, 'A senha é obrigatória e precisa de no mínimo 8 caracteres')
    .regex(/(?=.*?[A-Z])/, 'É necessário ao menos uma letra maiúscula')
    .regex(/(?=.*?[a-z])/, 'É necessário ao menos uma letra minúscula')
    .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número')
    .regex(/(\W|_)/, 'É necessário pelo menos um caracter especial'),
    confirm: z.string().min(1, 'É necessário confirmar a senha'),
    bio: z.string().min(5, 'A bio deve ter no mínimo 5 caracteres'), 
    contact: z.string().nonempty('Adicione um contato'),
    course_module: z.string().nonempty('Selecione o módulo'),
}).refine(({password, confirm}) => confirm === password, {
    message: 'A confimação de senha está incorreta',
    path: ['confirm'],
})