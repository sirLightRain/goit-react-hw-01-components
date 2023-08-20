
const colors = ['#67bcc5', '#a64ad8', '#d54957', '#49d57f'];

export const coloredStats = (obj) => {
    obj.forEach((item, index) => {
    item.bgc = colors[index];
  });

  console.log("Пофарбований обєкт", obj);
  return obj;
};
