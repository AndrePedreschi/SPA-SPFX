import { ReactElement } from "react";

import { Container, H1, Paragrafo, Section, Teste } from "./styles";

export function Home(): ReactElement {
  return (
    <Container>
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
          <Paragrafo>Husk + Conventional Commits</Paragrafo>
          <Paragrafo>
            Animações{" "}
            <a target="_blank" href="https://motion.dev/" rel="noreferrer">
              Link biblioteca
            </a>
          </Paragrafo>
        </ul>

        <H1>Ainda em fase de testes e estudos:</H1>
        <ul>
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
