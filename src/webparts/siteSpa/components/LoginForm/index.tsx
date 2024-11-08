import { ReactElement } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { PnPClientStorage } from "@pnp/common";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import { Form, ActionSection, InputsSection, ErrorContainer } from "./styles";
import { loginFormSchema, TLoginFormFields } from "../../components/LoginForm/schema";
import { useZustandStore } from "../../store";
import { TNewUserFormFields } from "../NewUserForm/schema";

const pnpStorage = new PnPClientStorage();

export interface IListItem extends Omit<TNewUserFormFields, "password"> {
	password?: string;
}

export const LoginForm = (): ReactElement => {
	const { userList, sp } = useZustandStore();
	const history = useHistory();
	const formMethods = useForm<TLoginFormFields>({
		mode: "onChange",
		resolver: zodResolver(loginFormSchema),
	});

	const {
		reset,
		getValues,
		register,
		handleSubmit,
		formState: { errors, isDirty, isSubmitting, isValid },
	} = formMethods;

	const onSubmit: SubmitHandler<TLoginFormFields> = async (): Promise<void> => {
		const payload = getValues();

		try {
			if (!sp) return;
			const web = sp.web;
			const list = web.lists.getById(userList);
			const items: IListItem[] = await list.items
				.select("Name", "Email", "Document", "Birthday", "UserName", "Gender", "Password")
				.top(1)
				.filter(`Email eq '${payload.email}' and Password eq '${payload.password}'`)();

			if (items.length > 0) {
				delete items[0].password;
				const user = items[0];
				pnpStorage.local.put("PnP_UserInfo", user);
				history.push("/produtos");
			} else {
				const user: IListItem[] = await list.items.select("Email").top(1).filter(`Email eq '${payload.email}'`)();
				if (user.length) {
					await Swal.fire({
						title: "Usuário ou senha errados",
						text: "Confirme se digitou corretamente o seu usuário e senha",
						icon: "error",
					});
				} else {
					await Swal.fire({
						title: "Usuário não cadastrado",
						text: "Você será redirecionado para criar seu usuário",
						icon: "error",
						//didClose: () => history.push('/newUser')
					});
					history.push("/newUser");
				}
			}

			reset();
		} catch (error) {
			console.error("Erro ao buscar dados da lista: ", error);
		}
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<InputsSection>
				<label>
					Email
					<input {...register("email")} />
					<ErrorContainer>{errors.email && <p role="alert">{errors.email.message}</p>}</ErrorContainer>
				</label>

				<label>
					Senha
					<input {...register("password")} />
					<ErrorContainer>{errors.password && <p role="alert">{errors.password.message}</p>}</ErrorContainer>
				</label>
			</InputsSection>

			<ActionSection>
				<button type="button" onClick={() => history.push("/")}>
					Voltar
				</button>
				<button type="submit" disabled={!isDirty || !isValid || isSubmitting}>
					Logar
				</button>
			</ActionSection>
		</Form>
	);
};
