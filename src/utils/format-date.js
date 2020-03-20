const Month = {
  JANUARY: `JANUARY`,
  FEBRUARY: `FEBRUARY`,
  MART: `MART`,
  APRIL: `APRIL`,
  MAY: `MAY`,
  JUNE: `JUNE`,
  JULY: `JULY`,
  AUGUST: `AUGUST`,
  SEPTEMBER: `SEPTEMBER`,
  OCTOBER: `OCTOBER`,
  NOVEMBER: `NOVEMBER`,
  DECEMBER: `DECEMBER`
};

const months = [
  Month.JANUARY, Month.FEBRUARY, Month.MART, Month.APRIL, Month.MAY, Month.JUNE,
  Month.JULY, Month.AUGUST, Month.SEPTEMBER, Month.OCTOBER, Month.NOVEMBER, Month.DECEMBER
];

const formatDate = (date) => {
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export default formatDate;
