const categories = ["income", "bill", "debt", "loan", "savings", "extra", "budget"];

const nameMap = {
  income: ["Salary", "Freelance", "Investment Dividends", "Bonus", "Tax Refund"],
  bill: ["Electricity", "Water", "Internet", "Rent", "Mobile Plan", "Netflix"],
  debt: ["Credit Card Payment", "Personal Loan", "Student Loan", "Overdraft"],
  loan: ["Home Loan", "Car Loan", "Business Loan", "Mortgage"],
  savings: ["Emergency Fund", "Stock Portfolio", "Crypto", "High Yield Account"],
  extra: ["Dining Out", "Movie Night", "Hobby Supplies", "Gift"],
  budget: ["Groceries", "Fuel", "Transportation", "Household Supplies"]
};

export const mockTransactions = Array.from({ length: 1000 }, (_, i) => {
  // 1. Pick a random category
  const category = categories[Math.floor(Math.random() * categories.length)];
  
  // 2. Logic for Credit vs Debit
  // Usually, only 'income' is a credit in this context
  const isCredit = category === "income";

  // 3. Amount Fluctuations based on your specs
  let amount;
  if (isCredit) {
    // High range: 30,000 to 1,500,000
    amount = Math.floor(Math.random() * (100000 - 1000 + 1)) + 30000;
  } else {
    // Low range: 1,000 to 100,000
    amount = Math.floor(Math.random() * (50000 - 300 + 1)) + 1000;
  }

  // 4. Random Date between 2026 and 2030
  const start = new Date(2026, 0, 1).getTime();
  const end = new Date(2030, 11, 31).getTime();
  const randomDate = new Date(start + Math.random() * (end - start));

  // 5. Select a realistic name based on category
  const possibleNames = nameMap[category];
  const name = possibleNames[Math.floor(Math.random() * possibleNames.length)];

  return {
    id: i,
    name: name.toLowerCase(),
    category: category,
    amount: amount,
    isCredit: isCredit,
    date: randomDate,
    notes: ""
  };
}).sort((a, b) => a.date - b.date); // Sort chronologically for better UX