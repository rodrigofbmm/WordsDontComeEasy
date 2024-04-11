import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const SearchBar: FunctionComponent<
  { text: string; setText: (text: string) => void; action: () => void }
> = ({ text, setText, action }) => {
  return (
    <div>
      <input
        type="text"
        value={text}
        onInput={(e) => setText((e.target as HTMLInputElement).value)}
      />
      <button onClick={action}>Clear</button>
    </div>
  );
};

export default SearchBar;
