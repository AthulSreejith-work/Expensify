import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import CustomBarChart from "../../components/Charts/CustomBarChart";
import { prepareIncomeBarChartData } from "../../utils/helper";

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);
  }, [transactions]);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg">Income Overview</h5>
        <button onClick={onAddIncome} className="card-btn">
          <FiPlus className="text-base" /> Add Income
        </button>
      </div>
      <CustomBarChart data={chartData} />
    </div>
  );
};

export default IncomeOverview;
