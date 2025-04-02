import React, { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "User Experience Design", students: 25 },
    { id: 2, title: "Frontend Development", students: 30 },
  ]);

  return (
    <div>
      <h2 className="text-xl font-bold">Courses</h2>
      {courses.length === 0 ? (
        <p>No courses assigned yet.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {courses.map((course) => (
            <li key={course.id} className="p-2 bg-white shadow rounded">
              {course.title} - {course.students} Students
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Courses;
