import React from "react";

const Home = ({ instructor }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dashboard Overview</h2>

      {/* Instructor Stats */}
      <section className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Courses</h3>
          <p className="text-2xl font-bold">{instructor.courses}</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Assigned Learners</h3>
          <p className="text-2xl font-bold">{instructor.learners}</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Completion Rate</h3>
          <p className="text-2xl font-bold">{instructor.completionRate}</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Training Time</h3>
          <p className="text-2xl font-bold">{instructor.trainingTime}</p>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="mt-6">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>📌 John submitted "Module 5 Assessment" - March 30, 2025</li>
            <li>📌 Lisa completed "Web Development Basics" - March 28, 2025</li>
            <li>📌 New student enrolled in "UI/UX Design" - March 27, 2025</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
