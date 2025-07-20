'use client';

import { useState } from 'react';
import RecurrenceSelector from '@/components/RecurrenceSelector';
import CalendarPreview from '@/components/CalendarPreview';

export default function Home() {
  const [recurrence, setRecurrence] = useState({
    frequency: 'weekly',
    interval: 1,
    daysOfWeek: [1], // Monday
    pattern: undefined,
    startDate: new Date(),
    endDate: undefined,
  });

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <h1 className="text-2xl font-semibold mb-4">🗓️ Recurring Date Picker</h1>
      <RecurrenceSelector recurrence={recurrence} setRecurrence={setRecurrence} />
      <div className="mt-6">
        <CalendarPreview recurrence={recurrence} />
      </div>
    </main>
  );
}
