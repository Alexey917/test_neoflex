import HeadPhones from "../components/UI/HeadPhones/HeadPhones";
import { headphones } from "../data/headphones";

const Main = () => {
  return (
    <>
      <HeadPhones title="Наушники" goods={headphones} />
      <HeadPhones title="Беспроводные наушники" goods={headphones} />
    </>
  );
};

export default Main;
