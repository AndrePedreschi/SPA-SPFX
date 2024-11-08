import { ReactElement, useCallback, useEffect, useState } from "react";

import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import { Container, Back } from "./styles";
import { Card } from "../../../components/Card";
import { NavigationHeader } from "../../../components/Header";

export function ProductOverview(): ReactElement {
	const [personagem, setPersonagem] = useState<any>();
	const { id } = useParams<{ id: string }>();
	const history = useHistory();

	const getData = useCallback(async (): Promise<void> => {
		try {
			const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
			setPersonagem(response.data);
		} catch (error) {
			console.error(error);
		}
	}, [id]);

	useEffect(() => {
		getData();
	}, [getData, id]);

	//exemplo de utilização do children(prop especial) com o component Card
	return (
		<Container>
			<NavigationHeader />
			<Back onClick={history.goBack}>
				<p>Voltar</p>
			</Back>
			{personagem && (
				<Card>
					<img src={personagem.image} alt="imagem do personagem" />
					<p>Nome: {personagem.name}</p>
					<p>Status: {personagem.status}</p>
					<p>Gênero: {personagem.gender}</p>
					<p>Localização: {personagem.location.name}</p>
				</Card>
			)}
		</Container>
	);
}
