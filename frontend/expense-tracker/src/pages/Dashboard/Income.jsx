import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import IncomeOverview from '../Income/IncomeOverview';
import axiosInstance from '../../utils/axiosinstance';
import { API_PATHS } from '../../utils/apiPaths';
import Modal from '../../components/Shared/Modal';
import AddIncomeForm from '../Income/AddIncomeForm';
import IncomeAllTransactions from '../Income/IncomeAllTransactions';
import DeleteAlert from '../../components/Shared/DeleteAlert';

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({ show: false, data: null });

  const fetchIncomeDetails = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(API_PATHS.INCOME.GET_ALL_INCOME);
      if (response.data) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddIncome = async (income) => {
    try {
      const response = await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, income);
      if (response.data) {
        fetchIncomeDetails();
        setOpenAddIncomeModal(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteIncome = async () => {
    if (!openDeleteAlert.data) return;
    try {
      await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(openDeleteAlert.data._id));
      fetchIncomeDetails();
      setOpenDeleteAlert({ show: false, data: null });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchIncomeDetails();
  }, []);

  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <IncomeOverview
            transactions={incomeData}
            onAddIncome={() => setOpenAddIncomeModal(true)}
          />
          <IncomeAllTransactions
            transactions={incomeData}
            onSeeMore={() => {}}
            onDelete={(data) => setOpenDeleteAlert({ show: true, data })}
          />
        </div>
      </div>

      <Modal
        isOpen={openAddIncomeModal}
        onClose={() => setOpenAddIncomeModal(false)}
        title="Add Income"
      >
        <AddIncomeForm
          onSubmit={handleAddIncome}
          onCancel={() => setOpenAddIncomeModal(false)}
        />
      </Modal>

      <Modal
        isOpen={openDeleteAlert.show}
        onClose={() => setOpenDeleteAlert({ show: false, data: null })}
        title="Delete Income"
      >
        <DeleteAlert
          content="Are you sure you want to delete this income detail?"
          onDelete={handleDeleteIncome}
        />
      </Modal>
    </DashboardLayout>
  );
};

export default Income;
