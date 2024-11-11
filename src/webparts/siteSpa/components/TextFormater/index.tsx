import * as Prism from "prismjs";

import { Section, Pre } from "./styles";
import "prismjs/components/prism-json";
import "prismjs/themes/prism-tomorrow.css";

type TTextFormaterprops = {
  text: string;
  language?: string;
};

export const TextFormater = ({
  text,
  language = "json",
}: TTextFormaterprops) => {
  return (
    <Section>
      <Pre className={`language-${language}`}>
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              text,
              Prism.languages[`${language}`],
              language,
            ),
          }}
        />
      </Pre>
    </Section>
  );
};
