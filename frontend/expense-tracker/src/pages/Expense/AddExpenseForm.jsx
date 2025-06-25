import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const AddExpenseForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    date: '',
    icon: ''
  });

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEmojiClick = (emojiData) => {
    setFormData(prev => ({ ...prev, icon: emojiData.emoji }));
    setShowEmojiPicker(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.category || !formData.amount || !formData.date) return;
    onSubmit(formData);
  };

  const categoryOptions = [
    'Food',
    'College',
    'Entertainment',
    'Groceries',
    'Miscellaneous',
    'Vacation',
    'Friends',
    'Family'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="input-box w-full"
          required
        >
          <option value="">Select Category</option>
          {categoryOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Amount</label>
        <input
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          className="input-box w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          className="input-box w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Pick Icon (Emoji)</label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="btn-primary"
          >
            {formData.icon ? formData.icon : 'Pick Emoji'}
          </button>
          {formData.icon && <span className="text-2xl">{formData.icon}</span>}
        </div>
        {showEmojiPicker && (
          <div className="mt-2 z-50">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          className="btn-primary bg-gray-300 text-black"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="btn-primary">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
