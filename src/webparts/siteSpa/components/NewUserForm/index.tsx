import { ReactElement } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import { newUserFormSchema, TNewUserFormFields } from "./schema";
import { Form, ActionSection, InputsSection, ErrorContainer } from "./styles";
import { useZustandStore } from "../../store";
import { IListItem } from "../LoginForm";

export const NewUserForm = (): ReactElement => {
	const { userList, sp } = useZustandStore();
	const history = useHistory();

	const formMethods = useForm<TNewUserFormFields>({
		mode: "onChange",
		resolver: zodResolver(newUserFormSchema),
	});

	const {
		reset,
		getValues,
		register,
		formState: { errors, isDirty, isSubmitting, isValid },
	} = formMethods;

	const onSubmit = async (): Promise<void> => {
		const payload = getValues();

		try {
			if (!sp) return;
			const web = sp.web;
			const list = web.lists.getById(userList);

			const user: IListItem[] = await list.items.select("Email").top(1).filter(`Email eq '${payload.email}'`)();

			if (user.length) {
				await Swal.fire({
					title: "Usuário já cadastrado",
					text: "Você reveja os seus dados",
					icon: "error",
				});
			} else {
				await list.items.add({
					Email: payload.email,
					Document: payload.document,
					Birthday: payload.birthday,
					UserName: payload.userName,
					Gender: payload.gender,
					Password: payload.password,
					Name: payload.name,
				});

				await Swal.fire({
					title: "Usuário cadastrado",
					text: "Você já pode logar na area do usuário",
					icon: "success",
				});

				reset();
				history.push("/login");
			}
		} catch (error) {
			console.error("Erro ao registrar na lista", error);
		}
	};

	return (
		<Form>
			<InputsSection>
				<label>
					Nome
					<input type="text" {...register("name")} />
					<ErrorContainer>{errors.name && <p role="alert">{errors.name.message}</p>}</ErrorContainer>
				</label>

				<label>
					Email
					<input type="email" {...register("email")} />
					<ErrorContainer>{errors.email && <p role="alert">{errors.email.message}</p>}</ErrorContainer>
				</label>

				<label>
					CPF
					<input type="text" {...register("document")} />
					<ErrorContainer>{errors.document && <p role="alert">{errors.document.message}</p>}</ErrorContainer>
				</label>

				<label>
					Data de nascimento
					<input type="date" {...register("birthday")} />
					<ErrorContainer>{errors.birthday && <p role="alert">{errors.birthday.message}</p>}</ErrorContainer>
				</label>

				<label>
					Username
					<input type="text" {...register("userName")} />
					<ErrorContainer>{errors.userName && <p role="alert">{errors.userName.message}</p>}</ErrorContainer>
				</label>

				<label>
					Gender Selection
					<select defaultValue="" {...register("gender")}>
						<option disabled value="">
							Selecione uma opção
						</option>
						<option value="female">female</option>
						<option value="male">male</option>
						<option value="other">other</option>
					</select>
					<ErrorContainer>{errors.gender && <p role="alert">{errors.gender.message}</p>}</ErrorContainer>
				</label>

				<label>
					Senha
					<input type="text" {...register("password")} />
					<ErrorContainer>{errors.password && <p role="alert">{errors.password.message}</p>}</ErrorContainer>
				</label>
			</InputsSection>

			<ActionSection>
				<button type="button" onClick={() => history.push("/")}>
					Voltar
				</button>
				<button
					type="button"
					onClick={async () => {
						await Swal.fire({
							title: "Quer salvar os dados?",
							showCancelButton: true,
							confirmButtonText: "Salvar",
							cancelButtonText: "Cancelar",
						}).then(async (result) => {
							if (result.isConfirmed) {
								await onSubmit();
							}
						});
					}}
					disabled={!isDirty || !isValid || isSubmitting}
				>
					Criar
				</button>
			</ActionSection>
		</Form>
	);
};
