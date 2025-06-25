import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, amount } = payload[0].payload;
    return (
      <div className="bg-white p-2 rounded shadow text-sm text-gray-800">
        <p>{name}: ₹{amount}</p>
      </div>
    );
  }
  return null;
};

const renderLegendText = (value) => (
  <span style={{ color: '#6b7280', fontSize: '14px' }}>{value}</span> // Tailwind's text-gray-500
);

const CustomPieChart = ({ data, label, totalAmount, showTextAnchor }) => {
  const pastelShades = [
    '#9ACD9A',
    '#A3A8D8',
    '#F4B393',
    '#B6D7A8',
    '#F4A7A0',
    '#BCA7F5',
    '#D8D681',
    '#F5AFC0',
  ];

  return (
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pastelShades[index % pastelShades.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend formatter={renderLegendText} />
        {showTextAnchor && (
          <>
            <text
              x="50%"
              y="50%"
              dy={-25}
              textAnchor="middle"
              fill="#666"
              fontSize="14px"
            >
              {label}
            </text>
            <text
              x="50%"
              y="50%"
              dy={8}
              textAnchor="middle"
              fill="#333"
              fontSize="24px"
              fontWeight="600"
            >
              {totalAmount}
            </text>
          </>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
