import { z } from "zod";

const genders = ["female", "male", "other"] as const;

export const newUserFormSchema = z.object({
	name: z
		.string({
			invalid_type_error: "Apenas letras são aceitas",
			required_error: "Digite um nome",
		})
		.min(4, { message: "Nome invalido" }),
	email: z.string({ required_error: "Digite um email" }).email({ message: "Digite um email válido" }),
	document: z.string({ required_error: "Digite um CPF" }).min(11, { message: "Digite um CPF valido" }),
	birthday: z
		.string({ required_error: "Digite a sua data de nascimento" })
		.min(10, { message: "Data de nascimento invalida" })
		.max(10, { message: "Data de nascimento invalida" }),
	userName: z.string({ required_error: "Digite um username" }).min(4, { message: "Username muito curto" }),
	gender: z.enum(genders, { required_error: "Selecione uma opção" }),
	password: z.string({ required_error: "Digite uma senha" }),
});

export type TNewUserFormFields = z.infer<typeof newUserFormSchema>;
