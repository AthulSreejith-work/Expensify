import React from "react";

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <p className="text-sm text-gray-700">{content}</p>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-sm transition-colors duration-200"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;
