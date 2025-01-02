import { ReactElement } from "react";

//import * as Prism from "prismjs";
//import "prismjs/components/prism-json";
//import "prismjs/themes/prism-tomorrow.css";

import { lintConfig, vscConfig } from "./config";
import { Container, Section } from "./styles";
import { TextFormater } from "../../components/TextFormater";
import { TextWithCopy } from "../../components/TextWithCopy";

export function LintConfiguration(): ReactElement {
  const lintConfigJson = lintConfig;
  const vscConfigJson = vscConfig;

  return (
    <Container>
      <Section>
        <h1>Configurando o Lint no seu projeto</h1>
        <p>
          O Lint é um formatador de código que analisa estaticamente seu código
          para encontrar problemas rapidamente
        </p>
        <p>
          Nosso objetivo com ele vai além de encontrar problemas, mas sim
          formatar o projeto para um único padrão de trabalho, de forma que
          qualquer pessoa que trabalhe no projeto sigam determinadas regras.
        </p>
        <p>
          Para Configurar o lint vamos precisasr seguir alguns passos(obs.: para
          a versão do spfx 1.19 e eslint 8.7.0):
        </p>
      </Section>
      <Section>
        <h3>Desistalar as seguintes libs nativas do spfx:</h3>
        <div>
          <p>@microsoft/eslint-config-spfx</p>
          <TextWithCopy>
            npm uninstall @microsoft/eslint-config-spfx
          </TextWithCopy>
        </div>
        <div>
          <p>@microsoft/eslint-plugin-spfx</p>
          <TextWithCopy>
            npm uninstall @microsoft/eslint-plugin-spfx
          </TextWithCopy>
        </div>
      </Section>
      <Section>
        <h3>Instalar como devDependencies:</h3>

        <div>
          <p>
            @typescript-eslint/eslint-plugin V.5.0.0 -{" "}
            <a
              target="_blank"
              href="https://www.npmjs.com/package/@typescript-eslint/eslint-plugin"
              rel="noreferrer"
            >
              Link biblioteca
            </a>{" "}
          </p>
          <TextWithCopy>
            npm i @typescript-eslint/eslint-plugin@5.0.0
          </TextWithCopy>
        </div>

        <div>
          <p>
            @typescript-eslint/parser V.5.0.0 -{" "}
            <a
              target="_blank"
              href="https://www.npmjs.com/package/@typescript-eslint/parser"
              rel="noreferrer"
            >
              Link biblioteca
            </a>
          </p>
          <TextWithCopy>npm i @typescript-eslint/parser@5.0.0</TextWithCopy>
        </div>

        <div>
          <p>
            eslint-config-prettier -{" "}
            <a
              target="_blank"
              href="https://www.npmjs.com/package/eslint-config-prettier"
              rel="noreferrer"
            >
              Link biblioteca
            </a>
          </p>
          <TextWithCopy>npm i eslint-config-prettier</TextWithCopy>
        </div>

        <div>
          <p>
            eslint-plugin-import -{" "}
            <a
              target="_blank"
              href="https://www.npmjs.com/package/eslint-plugin-import"
              rel="noreferrer"
            >
              Link biblioteca
            </a>
          </p>
          <TextWithCopy>npm i eslint-plugin-import</TextWithCopy>
        </div>

        <div>
          <p>
            eslint-plugin-prettier -{" "}
            <a
              target="_blank"
              href="https://www.npmjs.com/package/eslint-plugin-prettier"
              rel="noreferrer"
            >
              Link biblioteca
            </a>
          </p>
          <TextWithCopy>npm i eslint-plugin-prettier</TextWithCopy>
        </div>

        <div>
          <p>
            prettier -{" "}
            <a
              target="_blank"
              href="https://www.npmjs.com/package/prettier"
              rel="noreferrer"
            >
              Link biblioteca
            </a>
          </p>
          <TextWithCopy>npm i prettier</TextWithCopy>
        </div>
      </Section>
      <Section>
        <h3>Configurar o Lint:</h3>
        <p>Criar um arquivo .eslintignore e add o seguinte código</p>
        <p>Rodar o seguinte comando no terminal: npm init @eslint/config</p>
        <p>
          Seguir o passo a passo das msgs no console, criando um arquivo JSON
        </p>
        <p>Configs para adicionar no arquivo .eslintrc.json</p>
        <TextFormater text={lintConfigJson} />
        <p>
          Após as configurações executar o comando{" "}
          <strong>control + shift + p</strong> e digitar ESLint: Restart ESLit
          Server
        </p>
        <p>
          Obs.: Talvez seja necessário realizar alguma configuração no seu
          arquivo de settings do vsCode
        </p>
        <p>
          Atentar-se as propriedades `prettier.xxx` e a propriedade
          `editor.defaultFormatter` dentro de [typescriptreact] e [typescript]
        </p>
        <TextFormater text={vscConfigJson} />
      </Section>
    </Container>
  );
}
