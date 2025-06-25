import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";
import Modal from "../Shared/Modal";
import DeleteAlert from "../Shared/DeleteAlert";

const ExpenseTransactions = ({ transactions, onSeeMore, onDelete }) => {
  const [openDeleteAlert, setOpenDeleteAlert] = useState({ show: false, data: null });

  const handleDelete = async () => {
    if (!openDeleteAlert.data) return;
    await onDelete(openDeleteAlert.data);
    setOpenDeleteAlert({ show: false, data: null });
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Expenses</h5>
        <button className="card-btn" onClick={onSeeMore}>
          See All <FiArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transactions?.slice(0, 5).map((expense) => (
          <TransactionInfoCard
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            date={moment(expense.date).format("Do MMM YYYY")}
            amount={expense.amount}
            type="expense"
            onDelete={() => setOpenDeleteAlert({ show: true, data: expense })}
          />
        ))}
      </div>

      <Modal
        isOpen={openDeleteAlert.show}
        onClose={() => setOpenDeleteAlert({ show: false, data: null })}
        title="Delete Expense"
      >
        <DeleteAlert
          content="Are you sure you want to delete this expense?"
          onDelete={handleDelete}
        />
      </Modal>
    </div>
  );
};

export default ExpenseTransactions;
