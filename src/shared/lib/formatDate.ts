export function formatDate(date: Date) {
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const weekday = weekdays[date.getDay()];

  const dateString = `${day} ${month} ${weekday}`;

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const startTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  const endTime = `${String((hours + 1) % 24).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

  const timeString = `${startTime} - ${endTime}`;
  return { dateString, timeString };
}

export function parseDateAndTime(dateStr: string, timeStr: string): { start: Date; end: Date } {
  const monthMap: { [key: string]: number } = {
    Январь: 0,
    Февраль: 1,
    Март: 2,
    Апрель: 3,
    Май: 4,
    Июнь: 5,
    Июль: 6,
    Август: 7,
    Сентябрь: 8,
    Октябрь: 9,
    Ноябрь: 10,
    Декабрь: 11,
  };

  const [dayStr, monthStr] = dateStr.split(" ");
  const day = parseInt(dayStr, 10);
  const month = monthMap[monthStr];

  const [startTimeStr, endTimeStr] = timeStr.split(" - ");
  const [startHours, startMinutes] = startTimeStr.split(":").map(Number);
  const [endHours, endMinutes] = endTimeStr.split(":").map(Number);

  if (isNaN(startHours) || isNaN(startMinutes) || isNaN(endHours) || isNaN(endMinutes)) {
    throw new Error("Некорректный формат времени");
  }

  const startDate = new Date(new Date().getFullYear(), month, day, startHours + 1, startMinutes);
  const endDate = new Date(new Date().getFullYear(), month, day, endHours, endMinutes);

  console.log(endDate);

  return { start: startDate, end: endDate };
}

export function isCurrentTimeInRange(dateStr: string, timeStr: string): boolean {
  const { start } = parseDateAndTime(dateStr, timeStr);
  const currentDate = new Date();

  return currentDate >= start;
}
