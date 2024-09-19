import fromSessionStorage from "./fromSessionStorage";

const totalSum = () => {
  let arr = fromSessionStorage();
  let res = arr.reduce((acc, item) => acc + item.price, 0);
  return res;
};

export default totalSum;
