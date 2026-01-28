export const formatDate = (date: Date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = new Intl.DateTimeFormat('es-MX', {
    month: 'long',
    year: 'numeric',
  }).format(date);

  return {
    month,
    year,
    formattedDate,
  };
};