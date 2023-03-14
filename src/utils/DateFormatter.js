export const dateFormatter = (date) => {
  const newDate = new Date(date);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return newDate.toLocaleString("en-GB", options);
};
