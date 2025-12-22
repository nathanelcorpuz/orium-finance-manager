export interface Account {
  id: string;
  name: string;
  amount: number;
}

export interface Transaction {
  id: string | number;
  name: string;
  category: string;
  amount: number;
  isCredit: boolean;
  date: Date;
  notes: string;
}
