const formatDate = (date: Date): string => {
  const parsedDate = new Date(date);

  const day = parsedDate.getUTCDate();
  const month = parsedDate.getMonth();
  const year = parsedDate.getFullYear();

  const fullDate = `${day}/${month}/${year}`;

  return fullDate;
};

export default formatDate;
