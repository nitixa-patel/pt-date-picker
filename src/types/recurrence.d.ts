export type Frequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface RecurrencePattern {
  frequency: Frequency;
  interval: number;
  daysOfWeek?: number[];
  monthlyPattern?: string;
  startDate: string;
  endDate?: string;
}
