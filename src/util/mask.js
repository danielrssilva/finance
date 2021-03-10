export const number = (value) => {
//   if (value.includes("X")) return value.substr(0, value.indexOf("X") + 1);
  return value.substr(0, 11).replace(/[^0-9],([0-9]{2}$)/g, "");
};
