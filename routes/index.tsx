import Start from "../islands/start.tsx";

export type Tpokemon = {
  _id: string;
  name: string;
  image: string;
  sound: string;
};

const Home = () => {
  return <Start />;
};

export default Home;
