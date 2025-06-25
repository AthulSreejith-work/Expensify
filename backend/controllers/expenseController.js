const User = require('../models/User');
const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');
const Expense = require('../models/Expense');

const addExpense = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, category, amount, date } = req.body;

    if (!category || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newExpense = new Expense({
      userId,
      icon,
      category,
      amount,
      date: new Date(date)
    });

    await newExpense.save();

    res.status(201).json(newExpense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllExpenses = async (req, res) => {
  const userId = req.user.id;

  try {
    const expenses = await Expense.find({ userId }).sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const downloadExpenseExcel = async (req, res) => {
  const userId = req.user.id;

  try {
    const expenses = await Expense.find({ userId }).sort({ date: -1 });

    const data = expenses.map(item => ({
      Category: item.category,
      Amount: item.amount,
      Date: item.date.toISOString().split('T')[0]
    }));

    const fileName = 'expense_details.xlsx';
    const filePath = path.join(__dirname, fileName); // Save in current folder

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Expenses");
    xlsx.writeFile(wb, filePath);

    res.download(filePath, fileName, err => {
      if (err) {
        res.status(500).json({ message: "Download failed" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  addExpense,
  getAllExpenses,
  deleteExpense,
  downloadExpenseExcel
};
