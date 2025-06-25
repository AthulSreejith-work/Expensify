import React, { useState, useMemo } from "react";
import TransactionInfoCard from "../../components/Cards/TransactionInfoCard";
import moment from "moment";

const IncomeAllTransactions = ({ transactions, onSeeMore, onDelete }) => {
  const [sortType, setSortType] = useState("latest");

  const sortedTransactions = useMemo(() => {
    if (!transactions) return [];

    const sorted = [...transactions];

    switch (sortType) {
      case "amountHighLow":
        return sorted.sort((a, b) => b.amount - a.amount);
      case "amountLowHigh":
        return sorted.sort((a, b) => a.amount - b.amount);
      case "oldest":
        return sorted.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      case "latest":
      default:
        return sorted.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
    }
  }, [transactions, sortType]);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-2">
        <h5 className="text-lg font-semibold text-gray-800">
          All Income Transactions
        </h5>
        <select
          className="px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="latest">Newest → Oldest</option>
          <option value="oldest">Oldest → Newest</option>
          <option value="amountHighLow">Amount: High → Low</option>
          <option value="amountLowHigh">Amount: Low → High</option>
        </select>
      </div>

      <div className="mt-4">
        {sortedTransactions.length > 0 ? (
          sortedTransactions.map((income) => (
            <TransactionInfoCard
              key={income._id}
              title={income.source}
              icon={income.icon}
              date={moment(income.date).format("Do MMM YYYY")}
              amount={income.amount}
              type="income"
              onDelete={() => onDelete(income)}
            />
          ))
        ) : (
          <p className="text-sm text-gray-500">No income transactions found.</p>
        )}
      </div>
    </div>
  );
};

export default IncomeAllTransactions;
