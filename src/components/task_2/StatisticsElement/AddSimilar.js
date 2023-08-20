//* Функція перевіряє, чи є однакові документи і сумує їх проценти 
export const addSimilar = (data) => {
  const groupedData = {};

  data.forEach(item => {
    if (groupedData[item.label]) {
        console.log(groupedData);
      groupedData[item.label].percentage += item.percentage;
    } else {
      groupedData[item.label] = { ...item };
    }
  });
  console.log(groupedData);
  return Object.values(groupedData);
};
