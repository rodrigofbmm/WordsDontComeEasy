import { Signal } from "@preact/signals";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const Senalita: FunctionComponent<{ frase: Signal<string> }> = ({ frase }) => {
  return (
    <div>
      <h1>¡Hola! Soy una señal</h1>
      {<p>{frase.value}</p>}
    </div>
  );
};

export default Senalita;
