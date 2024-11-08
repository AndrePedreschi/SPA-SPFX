import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Insira um email válido" }),
  password: z.string({ required_error: "Digite uma senha" }),
});

export type TLoginFormFields = z.infer<typeof loginFormSchema>;
