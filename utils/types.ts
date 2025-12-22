export interface Account {
  id: string | number;
  name: string;
  amount: number;
}

export interface Transaction {
  id: string | number;
  name: string;
  category: string;
  amount: number;
  direction: "incoming" | "outgoing";
  date: Date;
  notes: string;
  account: string;
}

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface Finance {
  id: string | number;
  name: string;
  amount: number;
  account: string;
  direction: "incoming" | "outgoing";
  frequency: "daily" | "weekly" | "monthly" | "yearly";
  startDate: Date;
  endDate: Date;
  daysOfWeek: DayOfWeek[];
  dayOfMonth: number;
  customFrequency: "days" | "weeks" | "months" | "years";
  customFrequencyNumber: number;
  ends: "never" | "on" | "after";
  endsOnDate: Date;
  endsAfterOccurrences: number;
}
