import React, {FC} from "react";
import Prism from 'prismjs';
const loadLanguages = require('prismjs/components/');
loadLanguages(['ruby']);

type Props = {
  lang: string;
  code: string;
}

const CodeBlock: FC<Props> = ({ lang, code }) => (
  <pre>
    <code dangerouslySetInnerHTML={{__html: Prism.highlight(code, Prism.languages[lang], lang)}} />
  </pre>
);

export default CodeBlock;

