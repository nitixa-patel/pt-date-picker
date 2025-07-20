'use client';

import React from 'react';

const frequencies = ['daily', 'weekly', 'monthly', 'yearly'] as const;

export default function RecurrenceSelector({ recurrence, setRecurrence }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Frequency</label>
        <select
          value={recurrence.frequency}
          onChange={(e) => setRecurrence({ ...recurrence, frequency: e.target.value })}
          className="border p-2 rounded w-full text-black"
        >
          {frequencies.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Interval (Every X {recurrence.frequency})</label>
        <input
          type="number"
          min={1}
          value={recurrence.interval}
          onChange={(e) => setRecurrence({ ...recurrence, interval: Number(e.target.value) })}
          className="border p-2 rounded w-full text-black"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Start Date</label>
        <input
          type="date"
          value={recurrence.startDate.toISOString().split('T')[0]}
          onChange={(e) => setRecurrence({ ...recurrence, startDate: new Date(e.target.value) })}
          className="border p-2 rounded w-full text-black"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">End Date (optional)</label>
        <input
          type="date"
          value={recurrence.endDate ? recurrence.endDate.toISOString().split('T')[0] : ''}
          onChange={(e) =>
            setRecurrence({
              ...recurrence,
              endDate: e.target.value ? new Date(e.target.value) : undefined,
            })
          }
          className="border p-2 rounded w-full text-black"
        />
      </div>

      {recurrence.frequency === 'weekly' && (
        <div>
          <label className="block mb-1 font-medium">Days of Week</label>
          <div className="flex gap-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((label, i) => (
              <button
                key={i}
                onClick={() => {
                  const newDays = recurrence.daysOfWeek.includes(i)
                    ? recurrence.daysOfWeek.filter((d) => d !== i)
                    : [...recurrence.daysOfWeek, i];
                  setRecurrence({ ...recurrence, daysOfWeek: newDays });
                }}
                className={`w-8 h-8 rounded-full ${
                  recurrence.daysOfWeek.includes(i)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-black'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
