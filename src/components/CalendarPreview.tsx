import { format } from 'date-fns';
import { generateRecurringDates } from '@/lib/recurrence';

export default function CalendarPreview({ recurrence }) {
  const dates = generateRecurringDates(recurrence);

  return (
    <div>
      <label className="block text-sm font-medium mb-2">📅 Preview Dates</label>
      {dates.length === 0 ? (
        <p className="text-gray-500">No dates selected.</p>
      ) : (
        <ul className="space-y-1 max-h-40 overflow-y-auto bg-gray-100 dark:bg-gray-800 border p-2 rounded text-sm">
          {dates.map((date, index) => (
            <li key={index}>{format(date, 'PPP')}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
