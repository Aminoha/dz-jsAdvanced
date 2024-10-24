const dataArray = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const dataSet = new Set(
  dataArray.map((obj) => dataArray.find((el) => el.id === obj.id))
);
console.log(dataSet);