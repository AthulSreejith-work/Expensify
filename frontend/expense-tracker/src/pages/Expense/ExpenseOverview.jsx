import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import CustomBarChart from "../../components/Charts/CustomBarChart";
import { prepareExpenseBarChartData } from "../../utils/helper";

const ExpenseOverview = ({ transactions, onAddExpense }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(transactions);
    setChartData(result);
  }, [transactions]);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg">Expense Overview</h5>
        <button onClick={onAddExpense} className="card-btn">
          <FiPlus className="text-base" /> Add Expense
        </button>
      </div>
      <CustomBarChart data={chartData} />
    </div>
  );
};

export default ExpenseOverview;
