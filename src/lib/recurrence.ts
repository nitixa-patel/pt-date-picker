import { addDays, addWeeks, addMonths, addYears, isBefore, isSameDay } from 'date-fns';

export function generateRecurringDates(recurrence) {
  if (!recurrence) return [];

  const {
    frequency = 'daily',
    interval = 1,
    daysOfWeek = [],
    startDate,
    endDate,
  } = recurrence;

  const dates: Date[] = [];
  let current = new Date(startDate);
  let iterations = 0;
  const maxIterations = 200;

  while ((!endDate || isBefore(current, endDate) || isSameDay(current, endDate)) && iterations < maxIterations) {
    if (frequency === 'daily') {
      dates.push(new Date(current));
      current = addDays(current, interval);
    } else if (frequency === 'weekly') {
      if (daysOfWeek.includes(current.getDay())) {
        dates.push(new Date(current));
      }
      current = addDays(current, 1);
    } else if (frequency === 'monthly') {
      dates.push(new Date(current));
      current = addMonths(current, interval);
    } else if (frequency === 'yearly') {
      dates.push(new Date(current));
      current = addYears(current, interval);
    }
    iterations++;
  }

  return dates;
}
