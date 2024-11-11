import { ReactElement } from "react";

import { Container, Img, Section } from "./styles";
import erro from "../../assets/erro-commit.png";
import { TextFormater } from "../../components/TextFormater";
import { TextWithCopy } from "../../components/TextWithCopy";

export function CommitsConfiguration(): ReactElement {
  return (
    <Container>
      <Section>
        <h1>Configuração do conventional commits com linter + Commitizen</h1>
        <p>
          O objetivo é bloquear commits com msgs erradas, padronizar eles e ao
          mesmo tempo que o commit está sendo gerado, formatar o projeto com o
          lint antes de subir as alterações.
        </p>
        <p>
          Para isso, vamos seguir o padrão do conventional commits e vamos
          utilizar as seguintes bibliotecas: Husk, Commitlint
        </p>
        <p>
          Conventional commits -{" "}
          <a
            target="_blank"
            href=">https://www.conventionalcommits.org/pt-br/v1.0.0/"
            rel="noreferrer"
          >
            Link do site
          </a>
        </p>
        <p>
          Como maneira de auxilinar nos commits vamos utilizar a biblioteca
          Commitizen
        </p>
      </Section>

      <Section>
        <h2>Instalação das bibliotecas:</h2>
        <h3>Instalar o Husky</h3>
        <p>
          O husky é uma biblioteca que nos ajudará a capturar as fases de um
          commit por meio de hooks e criar ações em cada uma das fases
          desejadas.
        </p>
        <p>
          Husky-{" "}
          <a
            target="_blank"
            href="https://typicode.github.io/husky/get-started.html"
            rel="noreferrer"
          >
            Link da biblioteca
          </a>
        </p>
        <p>
          Devemos colocar os seguintes comandos no terminal do nosso projeto:
        </p>
        <TextWithCopy>npm install --save-dev husky</TextWithCopy>
        <TextWithCopy>npx husky init</TextWithCopy>
        <p>
          Após esse comando, uma pasta com o nome `.husky` será criada na raiz
          do seu projeto, dentro dela teremos um arquivo chamado `pre-commit`
          com algumas instruções que deverão ser substituídas pelos seguintes
          comandos, um em cada linha:
        </p>
        <TextWithCopy>npm run format</TextWithCopy>
        <p>
          Obs.: Caso não tenha configurado o script `format` no package.json,
          crie-o com o seguinte comando em scripts:
        </p>
        <TextFormater
          text={`
            {
              "format": "prettier --write './src/**/*.{js,jsx,ts,tsx}'",
            }`}
        />
        <TextWithCopy>git add -A .</TextWithCopy>
        <p>
          Criar um segundo arquivo com o nome `commit-msg` e adicionar o
          seguinte comando:
        </p>
        <TextWithCopy>{`npx --no-install commitlint --edit "$1"`}</TextWithCopy>
        <p>
          Adicionar um script ao nosso package.json para rodar o husky quando
          realizar o npm intall do projeto e garantir que todos os hooks estejam
          instalados:
        </p>
        <TextFormater
          text={`
          {
            "prepare": "husky"
          }`}
        />
      </Section>

      <Section>
        <h2>Instalar o commitlint</h2>
        <p>
          A biblioteca commitlint nos ajudara a reconhecer os commits errados e
          fornecerá msgs de erro explicando o que está errado no nosso commit
        </p>
        <p>
          CommitLint -{" "}
          <a target="_blank" href="https://commitlint.js.org/" rel="noreferrer">
            Link biblioteca
          </a>
        </p>
        <p>
          Devemos colocar os seguintes comandos no terminal do nosso projeto:
        </p>
        <TextWithCopy>
          {`npm install --save-dev @commitlint/{cli,config-conventional}`}
        </TextWithCopy>
        <TextWithCopy>{`echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlintrc.js`}</TextWithCopy>
        <p>
          O objetivo desse último comando é criar um arquivo com no nome
          .commitlintrc.js na raiz do nosso projeto e adicionar o seguinte
          código:
        </p>
        <TextFormater
          text={`module.exports = { extends: ['@commitlint/config-conventional'], };`}
        />
        <p>
          Exemplo de quando inserimos um commit no formato fora do padrão do
          conventional commits:{" "}
        </p>
        <p>{`git commit -m "mensagem inválida"`}</p>
        <Img url={erro} />
      </Section>

      <Section>
        <h2>Instalar o Commitizen</h2>
        <p>
          Está biblioteca nos auxiliará a criar os commits de maneira mais fácil
          e padronizada seguindo um passo a passo
        </p>
        <p>
          Commitizen -{" "}
          <a
            target="_blank"
            href="https://github.com/commitizen/cz-cli"
            rel="noreferrer"
          >
            Link biblioteca
          </a>
        </p>
        <p>Inserir o seguinte comando no terminal:</p>
        <TextWithCopy>npm install -g commitizen</TextWithCopy>
        <p>Adicionar nos scripts do package.json:</p>
        <TextFormater
          text={`{
            "commit": "cz"
          }`}
        />

        <h2>Instalar o cz-conventional-changelog</h2>
        <p>Essa biblioteca nos ajudará nas msgs de erro dos commits</p>
        <TextWithCopy>npm i cz-conventional-changelog</TextWithCopy>
        <p>
          Logo após `devDependencies` no pakage.json, adicionar o seguinte
          trecho de código:
        </p>
        <TextFormater
          text={`
            "config": { 
              "commitizen": {
                  "path": "./node_modules/cz-conventional-changelog"
              }
            }`}
        />
        <p>
          Para rodar o commitizen basta rodarmos o script `commit` que
          registramos previamente
        </p>
      </Section>
    </Container>
  );
}
