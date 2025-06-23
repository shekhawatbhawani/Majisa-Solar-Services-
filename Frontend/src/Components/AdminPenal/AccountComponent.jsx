// AccountComponent.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const AccountComponent = () => {
  const [expenses, setExpenses] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    date: "",
    month: "",
    year: ""
  });

  const [filter, setFilter] = useState({
    month: "",
    year: "",
    date: ""
  });

  const categories = [
    "salary", "tea", "water", "light", "petrol",
    "diesel", "lightHouse", "other"
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await axios.get("https://majisa-solar-services.onrender.com/api/expenses/all");
        setExpenses(res.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  const handleCategorySelect = (e) => {
    setActiveCategory(e.target.value);
    setShowForm(false);
    setShowAll(false);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const addExpense = async () => {
    const newExpense = {
      category: activeCategory,
      amount: parseFloat(formData.amount),
      description: formData.description,
      date: new Date(formData.date).getDate(),
      month: months[new Date(formData.date).getMonth()],
      year: new Date(formData.date).getFullYear()
    };

    try {
      const res = await axios.post("https://majisa-solar-services.onrender.com/api/expenses/add", newExpense);
      setExpenses([...expenses, res.data]);
      setFormData({ amount: "", description: "", date: "", month: "", year: "" });
      setShowForm(false);
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  const filteredExpenses = expenses.filter((item) => {
    const matchCategory = activeCategory ? item.category === activeCategory : true;
    const matchMonth = filter.month ? item.month === filter.month : true;
    const matchYear = filter.year ? item.year === parseInt(filter.year) : true;
    const matchDate = filter.date ? item.date === parseInt(filter.date) : true;
    return matchCategory && matchMonth && matchYear && matchDate;
  });

  const totalExpense = filteredExpenses.reduce((acc, e) => acc + e.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 p-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">💼 Account Summary</h2>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <select
            className="p-2 rounded border border-gray-300 shadow"
            onChange={handleCategorySelect}
            value={activeCategory}
          >
            <option value="">Select Expense Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.replace(/([A-Z])/g, " $1")}
              </option>
            ))}
          </select>

          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => setShowForm(true)}
            disabled={!activeCategory}
          >
            ➕ Add Expense
          </button>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => { setActiveCategory(""); setShowAll(true); }}
          >
            📋 Show All Expenses
          </button>
        </div>

        {showForm && (
          <div className="bg-white p-4 rounded shadow mb-6 space-y-4 animate-fade-in">
            <h4 className="text-lg font-semibold text-green-700">Add Expense to {activeCategory}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="number" name="amount" placeholder="Amount" className="border p-2 rounded" onChange={handleFormChange} value={formData.amount} />
              <input type="text" name="description" placeholder="Description" className="border p-2 rounded" onChange={handleFormChange} value={formData.description} />
              <input type="date" name="date" className="border p-2 rounded" onChange={handleFormChange} value={formData.date} />
            </div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={addExpense}
            >
              Submit Expense
            </button>
          </div>
        )}

        {(showAll || activeCategory) && (
          <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in border">
            <h3 className="text-2xl font-bold text-center mb-4 text-green-800">
              📊 {showAll ? "All Expenses - Filter by Month, Date & Year" : `${activeCategory.replace(/([A-Z])/g, " $1")} - Records`}
            </h3>

            {showAll && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <select name="month" className="border p-2 rounded" onChange={handleFilterChange} value={filter.month}>
                  <option value="">All Months</option>
                  {months.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
                <input type="number" name="date" placeholder="Date" className="border p-2 rounded" onChange={handleFilterChange} value={filter.date} />
                <input type="number" name="year" placeholder="Year" className="border p-2 rounded" onChange={handleFilterChange} value={filter.year} />
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full text-left border border-gray-200">
                <thead className="bg-green-100 text-green-900">
                  <tr>
                    {showAll && <th className="p-2 border">Category</th>}
                    <th className="p-2 border">Date</th>
                    <th className="p-2 border">Month</th>
                    <th className="p-2 border">Year</th>
                    <th className="p-2 border">Amount</th>
                    <th className="p-2 border">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredExpenses.map((item, index) => (
                    <tr key={index} className="hover:bg-green-50">
                      {showAll && <td className="p-2 border">{item.category}</td>}
                      <td className="p-2 border">{item.date}</td>
                      <td className="p-2 border">{item.month}</td>
                      <td className="p-2 border">{item.year}</td>
                      <td className="p-2 border">₹{item.amount.toLocaleString()}</td>
                      <td className="p-2 border">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-right font-bold text-green-800 mt-4">
                Total Expense: ₹{totalExpense.toLocaleString()}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AccountComponent;
