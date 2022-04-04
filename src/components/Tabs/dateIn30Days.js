export const dateIn30Days = () => {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  const dayIn30Days = String(date.getDate()).padStart(2, "0");
  const monthIn30Days = String(date.getMonth() + 1).padStart(2, "0");
  const yearIn30Days = date.getFullYear();
  const dateIn30Days = dayIn30Days + "/" + monthIn30Days + "/" + yearIn30Days;
  return dateIn30Days;
};
