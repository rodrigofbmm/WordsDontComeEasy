import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Fragment } from "preact/jsx-runtime";
import Axios from "npm:axios";
import Lover from "../components/Lover.tsx";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useState } from "preact/hooks";

type LoverT = {
  _id: string;
  foto: string;
};

type PokemonT = {
  _id: string;
  imagen: string;
};

const LoversPage = async (
  props: PageProps<{ pageData: LoverT[] | PokemonT[] }>,
) => {
  const url = new URL(props.url);
  const pagesection = url.pathname.slice(1);
  const [getData, setData] = useState<LoverT[] | PokemonT[]>([]);
  if (pagesection === "lovers") {
    const getData = await Axios.get<LoverT[]>(
      `https://lovers.deno.dev/`,
    );
    setData(getData.data);
  } else if (pagesection === "pokemons") {
    const getData = await Axios.get<PokemonT[]>(
      `https://lospoquimones.deno.dev/`,
    );
    setData(getData.data);
  } else if (pagesection === "superheroes") {
    const getData = await Axios.get<PokemonT[]>(
      `https://supermondongo.deno.dev/`,
    );
    setData(getData.data);
  }
  const lovers = getData;
  const partLength = lovers.length / 3;
  const firstPart = lovers.slice(0, partLength);
  const secondPart = lovers.slice(partLength, partLength * 2);
  const thirdPart = lovers.slice(partLength * 2);

  return (
    <Fragment>
      <div class={`titleSection ${props.url.pathname.slice(1)}`}>
        {props.url.pathname.slice(1) === "lovers" &&
          <h1 class="modernist">{props.url.pathname.slice(1)}</h1>}
        {props.url.pathname.slice(1) === "pokemons" &&
          <h1 class="fifties">{props.url.pathname.slice(1)}</h1>}
        {props.url.pathname.slice(1) === "superheroes" &&
          <h1 class="ninetyfive">{props.url.pathname.slice(1)}</h1>}
      </div>
      <div class="columns">
        <div class="column column-reverse">
          {secondPart.map((lover) => (
            <Lover
              image={(lover as any).foto
                ? (lover as LoverT).foto
                : (lover as PokemonT).imagen}
              key={lover._id}
            />
          ))}
        </div>
        <div class="column">
          {firstPart.map((lover) => (
            <Lover
              image={(lover as any).foto
                ? (lover as LoverT).foto
                : (lover as PokemonT).imagen}
              key={lover._id}
            />
          ))}
        </div>
        <div class="column column-reverse">
          {thirdPart.map((lover) => (
            <Lover
              image={(lover as any).foto
                ? (lover as LoverT).foto
                : (lover as PokemonT).imagen}
              key={lover._id}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default LoversPage;
