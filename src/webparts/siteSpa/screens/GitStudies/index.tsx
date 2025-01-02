import { ReactElement } from "react";

import { Container, Section } from "./styles";

export function GitStudies(): ReactElement {
  return (
    <Container>
      <h1>Estudos sobre o git</h1>
      <Section>
        <h2>Instalação do git</h2>
        <p>https://git-scm.com/downloads</p>
      </Section>

      <Section>
        <h2>Comandos básicos</h2>
        <h3>git add .</h3>
        <p>
          Este comando atualiza o índice usando o conteúdo atual encontrado na
          árvore de trabalho, para preparar o conteúdo preparado para o próximo
          commit.
        </p>
        <h3>{`git commit -m "Mensagem do commit"`}</h3>
        <p>
          Crie um novo commit contendo o conteúdo atual do índice e a mensagem
          de log fornecida descrevendo as alterações.
        </p>

        <h3>git push</h3>
        <p>Envia os dados do commit</p>

        <h3>git checkout Nome_da_Branch</h3>
        <p>Altera a sua branch para a que você passou o nome</p>
        <h3>git checkout -b Nome_da_Branch</h3>
        <p>Cria uma branch e já torna ela a sua branch atual</p>
      </Section>
    </Container>
  );
}
