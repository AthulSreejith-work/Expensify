import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";
import Modal from "../Shared/Modal";
import DeleteAlert from "../Shared/DeleteAlert";

const IncomeTransactions = ({ transactions, onSeeMore, onDelete }) => {
  const [openDeleteAlert, setOpenDeleteAlert] = useState({ show: false, data: null });

  const handleDelete = async () => {
    if (!openDeleteAlert.data) return;
    await onDelete(openDeleteAlert.data);
    setOpenDeleteAlert({ show: false, data: null });
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Income</h5>
        <button className="card-btn" onClick={onSeeMore}>
          See All <FiArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transactions?.slice(0, 5).map((income) => (
          <TransactionInfoCard
            key={income._id}
            title={income.source}
            icon={income.icon}
            date={moment(income.date).format("Do MMM YYYY")}
            amount={income.amount}
            type="income"
            onDelete={() => setOpenDeleteAlert({ show: true, data: income })}
          />
        ))}
      </div>

      <Modal
        isOpen={openDeleteAlert.show}
        onClose={() => setOpenDeleteAlert({ show: false, data: null })}
        title="Delete Income"
      >
        <DeleteAlert
          content="Are you sure you want to delete this income?"
          onDelete={handleDelete}
        />
      </Modal>
    </div>
  );
};

export default IncomeTransactions;
