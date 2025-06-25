import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import moment from 'moment';
import TransactionInfoCard from '../Cards/TransactionInfoCard';

const RecentTransactions = ({ transactions, onSeeMore }) => {
  // Sort by createdAt (newest first)
  const sortedTransactions = (transactions || [])
    .filter((tx) => tx?.createdAt && !isNaN(new Date(tx.createdAt)))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Recent Transactions</h5>
        <button className="card-btn" onClick={onSeeMore}>
          See All <FiArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {sortedTransactions.slice(0, 5).map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.type === 'expense' ? item.category : item.source}
            icon={item.icon}
            date={moment(item.createdAt).format('Do MMM YYYY')}
            amount={item.amount}
            type={item.type}
            hideDeleteBin
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
