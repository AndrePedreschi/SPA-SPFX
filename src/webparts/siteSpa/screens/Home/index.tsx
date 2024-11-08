import { ReactElement } from "react";

import { Container, H1, Paragrafo, Section, Teste } from "./styles";
import { NavigationHeader } from "../../components/Header";

export function Home(): ReactElement {
  return (
    <Container>
      <NavigationHeader />

      <Section>
        <H1>
          Bibliotecas testadas no SPFx que funcionam na versão 1.19, com o react
          17:
        </H1>
        <ul>
          <Paragrafo>
            React-hook-form -{" "}
            <a
              target="_blank"
              href="https://react-hook-form.com/"
              rel="noreferrer"
            >
              Link biblioteca
            </a>
          </Paragrafo>
          <Paragrafo>
            Zod -{" "}
            <a target="_blank" href="https://zod.dev/" rel="noreferrer">
              Link biblioteca
            </a>
          </Paragrafo>
          <Paragrafo>
            React router dom (V.5) -{" "}
            <a
              target="_blank"
              href="https://v5.reactrouter.com/"
              rel="noreferrer"
            >
              Link biblioteca
            </a>
          </Paragrafo>
          <Paragrafo>
            Segurança de rotas usando o protected route do react router dom
          </Paragrafo>
          <Paragrafo>
            Sweet Alert 2 -{" "}
            <a
              target="_blank"
              href="https://sweetalert2.github.io/"
              rel="noreferrer"
            >
              Link biblioteca
            </a>{" "}
          </Paragrafo>
          <Paragrafo>
            Styled Components -{" "}
            <a
              target="_blank"
              href="https://styled-components.com/"
              rel="noreferrer"
            >
              Link biblioteca
            </a>
          </Paragrafo>
          <Paragrafo>
            Requisições REST utilizando o axios -{" "}
            <a target="_blank" href="https://axios-http.com/" rel="noreferrer">
              Link biblioteca
            </a>
          </Paragrafo>
          <Paragrafo>
            Swiper - Sliders -{" "}
            <a target="_blank" href="https://swiperjs.com/" rel="noreferrer">
              Link biblioteca
            </a>
          </Paragrafo>
          <Paragrafo>
            Zustand - Para controle de estados globais -{" "}
            <a
              target="_blank"
              href="https://zustand-demo.pmnd.rs/"
              rel="noreferrer"
            >
              Link biblioteca
            </a>
          </Paragrafo>
          <Paragrafo>
            ESLint - Configuração de padrão de projeto{" "}
            <a target="_blank" href="https://eslint.org/" rel="noreferrer">
              Link biblioteca
            </a>
          </Paragrafo>
        </ul>

        <H1>Ainda em fase de testes e estudos:</H1>
        <ul>
          <Teste>
            Husk + Conventional Commits -
            https://shiharadilshan.medium.com/conventional-commits-pre-commit-hooks-with-husky-no-bad-commits-any-more-8c5a5a9d0fa6
            https://www.danieldcs.com/eslint-prettier-e-githooks-com-husky-em-react-js/
            https://dev.to/vitordevsp/padronizacao-de-commit-com-commitlint-husky-e-commitizen-3g1n
            https://www.tabnews.com.br/maiguelman/como-configurar-commitlint-husky-commits-padronizados-para-sua-equipe
            `
          </Teste>
          <Teste>Animações `</Teste>
          <Teste>
            Customização da página com o aplication customizer / extension
            project
          </Teste>
          <Teste>Integração com Power Automate</Teste>
          <Teste>Integração com Power Apps</Teste>
        </ul>

        <H1>Extras:</H1>
        <ul>
          <Teste>
            Exemplos -
            https://github.com/pnp/sp-dev-fx-extensions/tree/main/samples
          </Teste>
        </ul>
      </Section>
    </Container>
  );
}
