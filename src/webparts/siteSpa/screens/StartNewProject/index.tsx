import { ReactElement } from "react";

import { Container, Section, Img } from "./styles";
import deploy1 from "../../assets/deploy-1.png";
import deploy2 from "../../assets/deploy-2.png";
import deploy3 from "../../assets/deploy-3.png";
import { TextWithCopy } from "../../components/TextWithCopy";

export function StartNewProject(): ReactElement {
	return (
		<Container>
			<Section>
				<h1>Start de projeto</h1>
				<h2>Para começar um projeto com spfx devemos atentar-nos a alguns detalhes:</h2>
				<p>
					Primeiramente a versão do spfx deve ser compatível com a do node, typescript e react, segue site com a{" "}
					<strong>
						<a
							target="_blank"
							href="https://learn.microsoft.com/en-us/sharepoint/dev/spfx/compatibility"
							rel="noreferrer"
						>
							lista
						</a>
					</strong>{" "}
					atualizada
				</p>
				<p>Para verificar a versão do node, rodar o seguinte comando no terminal: node -v</p>
			</Section>

			<Section>
				<h2>Algumas ferramentas precisam ser instaladas:</h2>
				<h3>
					Gulp - Ferramenta usada para rodar o projeto{" "}
					<a target="_blank" href="https://gulpjs.com/" rel="noreferrer">
						Link ferramenta
					</a>
				</h3>
				<p>Rodar o seguinte comando no terminal: npm install --global gulp-cli</p>
				<h3>
					Yeoman - Ferramenta usada para inicializar um projeto <a href="https://yeoman.io/">Link ferramenta</a>
				</h3>
				<p>Rodar os seguintes comandos no terminal:</p>
				<TextWithCopy>npm install -g yo</TextWithCopy>
				<TextWithCopy>npm install -g generator-webapp</TextWithCopy>
				<TextWithCopy>npm i -g @microsoft/generator-sharepoint</TextWithCopy>
			</Section>
			<Section>
				<h2>Criar um projeto</h2>
				<p>Rodar os seguintes comandos no terminal:</p>
				<p>yo</p>
				<p>escolher a opção: @microsoft/SharePoint e seguir com as opções que vão ser apresentadas no terminal</p>
				<p>
					Quando o texto `Which type of client-side component to create?` aparecer, escolha entre as seguintes opções:
				</p>
				<p>Para criar uma página SPA ou webpart, selecionar a opção WebPart</p>
				<p>Ou se for criar uma extensio / aplication customizer, selecionae Extension</p>
			</Section>
			<Section>
				<h2>Rodar o projeto</h2>
				<p>Para rodar o projeto primeiro precisamos habilitar o certificado de segurança com o seguinte comando:</p>
				<TextWithCopy>gulp trust-dev-cert</TextWithCopy>
				<p>
					Esse comando só precisamos rodar 1 vez no projeto e após habilitar o certificado rodamos o projeto com o
					comando:
				</p>
				<p>gulp serve</p>
			</Section>
			<Section>
				<h2>Fazer deploy</h2>
				<p></p>
				<TextWithCopy>gulp bundle --ship</TextWithCopy>
				<p>
					O seguinte comando criará um arquivo .sppkg que estará localizado em sharepoint/solution dentro do diretório
					do seu projeto.
				</p>
				<TextWithCopy>gulp package-solution --ship</TextWithCopy>
				<p>Com o arquivo .sppkg, adicionamos ele no nosso App Catalog:</p>
				<p>Tela antiga do App Catalog</p>
				<Img url={deploy1} />
				<p>Tela nova do App Catalog</p>
				<Img url={deploy2} />
				<p>Salvar o arquivo .sppkg</p>
				<Img url={deploy3} />
				<p>
					Pós salvar no nosso App Catalog, a aplicação vai estar disponível para ser adicionada como uma web part ou
					para quando formos criar uma página nova
				</p>
			</Section>
		</Container>
	);
}
