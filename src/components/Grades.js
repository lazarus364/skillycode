import React, { useState } from "react";

const Grades = () => {
  const [grades, setGrades] = useState([
    { student: "Alice", course: "UX Design", grade: "A" },
    { student: "Bob", course: "Frontend Dev", grade: "B+" },
  ]);

  return (
    <div>
      <h2 className="text-xl font-bold">Grades</h2>
      {grades.length === 0 ? (
        <p>No grades available yet.</p>
      ) : (
        <table className="mt-4 w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-indigo-200">
              <th className="border p-2">Student</th>
              <th className="border p-2">Course</th>
              <th className="border p-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((entry, index) => (
              <tr key={index}>
                <td className="border p-2">{entry.student}</td>
                <td className="border p-2">{entry.course}</td>
                <td className="border p-2">{entry.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Grades;
