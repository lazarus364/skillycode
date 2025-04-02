import React, { useState } from "react";

const Reports = () => {
  const [reportData, setReportData] = useState({
    completionRate: "85%",
    trainingHours: 40,
  });

  return (
    <div>
      <h2 className="text-xl font-bold">Reports</h2>
      <p className="mt-2">Here is the training data for your students.</p>
      <ul className="mt-4 space-y-2">
        <li className="p-2 bg-white shadow rounded">📈 Completion Rate: {reportData.completionRate}</li>
        <li className="p-2 bg-white shadow rounded">⏳ Training Hours: {reportData.trainingHours} hrs</li>
      </ul>
    </div>
  );
};

export default Reports;
