import fromSessionStorage from "./fromSessionStorage";

const totalSum = () => {
  let arr = fromSessionStorage();
  return arr.reduce((acc, item) => acc + item.price, 0);
};

export default totalSum;
