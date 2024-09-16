const fromSessionStorage = () => {
  const goods = [];

  for (let i = 0; i < sessionStorage.length; i++) {
    goods.push(JSON.parse(sessionStorage.getItem(i)));
  }

  return goods;
};

export default fromSessionStorage;
