
export function* allDaysBetween(initialDate, finalDate) {
  let day = new Date(initialDate);
  while(day <= finalDate){
    yield day
    let nextDay = day.setDate(day.getDate() + 1);
    day = new Date(nextDay);
  }
}

export function previousMondayFrom(date) {
  let dateCopy = new Date(date);
  const day = dateCopy.getDay()
  if(day === 1) { // Already monday
    return dateCopy
  }
  
  const dayOffsetToMonday = day == 0 ? -6 : 1
  const diff = dateCopy.getDate() - day + dayOffsetToMonday;
  return new Date(dateCopy.setDate(diff));
}

export function firstDayOfYear(year) {
  return new Date(year, 0, 1);
}

export function lastDayOfTheYear(year) {
  return new Date(year, 11, 31)
}