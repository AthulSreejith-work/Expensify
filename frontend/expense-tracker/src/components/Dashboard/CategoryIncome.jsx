import React, { useEffect, useState } from 'react';
import { prepareIncomeBarChartData } from '../../utils/helper'; // adjust path if needed
import CustomBarChart from '../Charts/CustomBarChart';

const CategoryExpenses = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(data);
    setChartData(result);
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Category Income</h5>
      </div>

      <CustomBarChart data={chartData} />
    </div>
  );
};

export default CategoryExpenses;
