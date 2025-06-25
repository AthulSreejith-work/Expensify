import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import ExpenseOverview from '../Expense/ExpenseOverview.jsx';
import axiosInstance from '../../utils/axiosinstance';
import { API_PATHS } from '../../utils/apiPaths';
import Modal from '../../components/Shared/Modal';
import AddExpenseForm from '../Expense/AddExpenseForm';
import ExpenseAllTransactions from '../Expense/ExpenseAllTransactions';
import DeleteAlert from '../../components/Shared/DeleteAlert';

const Expense = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({ show: false, data: null });

  const fetchExpenseDetails = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(API_PATHS.EXPENSE.GET_ALL_EXPENSE);
      if (response.data) {
        setExpenseData(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddExpense = async (expense) => {
    try {
      const response = await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, expense);
      if (response.data) {
        fetchExpenseDetails();
        setOpenAddExpenseModal(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteExpense = async () => {
    if (!openDeleteAlert.data) return;
    try {
      await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(openDeleteAlert.data._id));
      fetchExpenseDetails();
      setOpenDeleteAlert({ show: false, data: null });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExpenseDetails();
  }, []);

  return (
    <DashboardLayout activeMenu="Expense">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <ExpenseOverview
            transactions={expenseData}
            onAddExpense={() => setOpenAddExpenseModal(true)}
          />
          <ExpenseAllTransactions
            transactions={expenseData}
            onSeeMore={() => {}}
            onDelete={(data) => setOpenDeleteAlert({ show: true, data })}
          />
        </div>
      </div>

      <Modal
        isOpen={openAddExpenseModal}
        onClose={() => setOpenAddExpenseModal(false)}
        title="Add Expense"
      >
        <AddExpenseForm
          onSubmit={handleAddExpense}
          onCancel={() => setOpenAddExpenseModal(false)}
        />
      </Modal>

      <Modal
        isOpen={openDeleteAlert.show}
        onClose={() => setOpenDeleteAlert({ show: false, data: null })}
        title="Delete Expense"
      >
        <DeleteAlert
          content="Are you sure you want to delete this expense detail?"
          onDelete={handleDeleteExpense}
        />
      </Modal>
    </DashboardLayout>
  );
};

export default Expense;
