export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";

  const [integerPart, fractionalPart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return fractionalPart
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
  const grouped = {};

  data.forEach((item) => {
    const category = item?.category || "Unknown";
    const amount = item?.amount || 0;

    if (grouped[category]) {
      grouped[category] += amount;
    } else {
      grouped[category] = amount;
    }
  });

  const chartData = Object.entries(grouped).map(([category, amount]) => ({
    category,
    amount,
  }));

  return chartData;
};


export const prepareIncomeBarChartData = (data = []) => {
  const grouped = {};

  data.forEach((item) => {
    const source = item?.source || 'Other';
    grouped[source] = (grouped[source] || 0) + item.amount;
  });

  return Object.entries(grouped).map(([source, amount]) => ({
    category: source,
    amount,
  }));
};