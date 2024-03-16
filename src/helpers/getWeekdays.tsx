export const getCurrentWeekDates = () => {
  const today = new Date();
  const currentDayOfWeek = today.getDay();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - currentDayOfWeek);

  const dates = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${month}/${day}`;
    dates.push(formattedDate);
  }

  return dates;
};
