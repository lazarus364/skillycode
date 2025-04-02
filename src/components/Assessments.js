import React, { useState, useEffect } from "react";

const Assessments = () => {
  const [assessments, setAssessments] = useState([]);
  const [newAssessment, setNewAssessment] = useState({
    title: "",
    timeLimit: 30,
    questions: [],
  });

  const [studentResults, setStudentResults] = useState([
    { name: "Alice", score: 85 },
    { name: "Bob", score: 72 },
    { name: "Charlie", score: 90 },
  ]);

  const sortedResults = studentResults.sort((a, b) => b.score - a.score);

  const [studentResponses, setStudentResponses] = useState([
    {
      student: "Alice",
      answers: [
        { question: "What is React?", answer: "A JS library", feedback: "" },
        { question: "What is JSX?", answer: "Syntax for React", feedback: "" },
      ],
    },
  ]);

  const handleFeedbackChange = (studentIndex, answerIndex, feedback) => {
    const updatedResponses = [...studentResponses];
    updatedResponses[studentIndex].answers[answerIndex].feedback = feedback;
    setStudentResponses(updatedResponses);
  };

  const addQuestion = (type) => {
    const questionTemplate = {
      text: "",
      type,
      choices: type === "mcq" ? ["", "", "", ""] : [],
      answer: type === "mcq" ? "" : null,
      feedback: "",
    };

    setNewAssessment({
      ...newAssessment,
      questions: [...newAssessment.questions, questionTemplate],
    });
  };

  const publishAssessment = () => {
    setAssessments([...assessments, newAssessment]);
    setNewAssessment({ title: "", timeLimit: 30, questions: [] });
    alert("Assessment Published!");
  };

  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    if (timeRemaining <= 0) {
      alert("Time's up! Auto-submitting...");
      submitAssessment();
    }
    const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeRemaining]);

  const submitAssessment = () => {
    alert("Assessment submitted!");
  };

  const [emails, setEmails] = useState("");
  const sendInvitations = () => {
    alert(`Invitations sent to: ${emails}`);
  };

  return (
    <div>
      {/* Timer Display */}
      <p className="text-red-500 font-bold">
        ⏳ Time Left: {Math.floor(timeRemaining / 60)}:{timeRemaining % 60 < 10 ? '0' : ''}{timeRemaining % 60}
      </p>
      <button onClick={submitAssessment} className="bg-blue-500 text-white px-3 py-1 rounded-md">
        Submit Now
      </button>

      <h2 className="text-xl font-bold mb-4">Create Assessment</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <input
          type="text"
          placeholder="Assessment Title"
          value={newAssessment.title}
          onChange={(e) =>
            setNewAssessment({ ...newAssessment, title: e.target.value })
          }
          className="border px-3 py-1 rounded-md w-full mb-4"
        />

        {/* Time Limit */}
        <label>Time Limit (minutes):</label>
        <input
          type="number"
          min="1"
          value={newAssessment.timeLimit}
          onChange={(e) =>
            setNewAssessment({ ...newAssessment, timeLimit: e.target.value })
          }
          className="border px-3 py-1 rounded-md w-full mb-4"
        />

        {/* Add Questions */}
        <h3 className="font-bold mb-2">Add Questions:</h3>
        {newAssessment.questions.map((q, index) => (
          <div key={index} className="mb-3 p-3 border rounded-md">
            <input
              type="text"
              placeholder="Question"
              value={q.text}
              onChange={(e) => {
                const updatedQuestions = [...newAssessment.questions];
                updatedQuestions[index].text = e.target.value;
                setNewAssessment({ ...newAssessment, questions: updatedQuestions });
              }}
              className="border px-2 py-1 rounded-md w-full mb-2"
            />
            {q.type === "mcq" &&
              q.choices.map((choice, cIndex) => (
                <input
                  key={cIndex}
                  type="text"
                  placeholder={`Choice ${cIndex + 1}`}
                  value={choice}
                  onChange={(e) => {
                    const updatedChoices = [...q.choices];
                    updatedChoices[cIndex] = e.target.value;
                    const updatedQuestions = [...newAssessment.questions];
                    updatedQuestions[index].choices = updatedChoices;
                    setNewAssessment({ ...newAssessment, questions: updatedQuestions });
                  }}
                  className="border px-2 py-1 rounded-md w-full mb-1"
                />
              ))}
          </div>
        ))}

        <button onClick={() => addQuestion("mcq")} className="bg-blue-500 text-white px-3 py-1 rounded-md">
          + Add MCQ
        </button>
        <button onClick={() => addQuestion("text")} className="bg-green-500 text-white px-3 py-1 rounded-md ml-2">
          + Add Free Text
        </button>

        <button onClick={publishAssessment} className="bg-indigo-600 text-white px-3 py-1 rounded-md mt-4">
          Publish Assessment
        </button>
      </div>

      {/* List of Published Assessments */}
      <h2 className="text-xl font-bold mt-6">Published Assessments</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        {assessments.length === 0 ? (
          <p>No assessments yet.</p>
        ) : (
          assessments.map((a, index) => (
            <div key={index} className="p-3 border rounded-md mb-3">
              <h3 className="font-bold">{a.title}</h3>
              <p>⏳ Time Limit: {a.timeLimit} mins</p>
              <p>📋 Questions: {a.questions.length}</p>
            </div>
          ))
        )}
      </div>

      {/* Student Performance Section */}
      <div className="bg-white p-4 shadow-md rounded-lg mt-6">
        <h2 className="text-xl font-bold">Student Performance</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="p-2 text-left">Student</th>
              <th className="p-2 text-left">Score</th>
            </tr>
          </thead>
          <tbody>
            {sortedResults.map((student, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{student.name}</td>
                <td className="p-2">{student.score}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Student Responses Section */}
      <div className="bg-white p-4 shadow-md rounded-lg mt-6">
        <h2 className="text-xl font-bold">Student Responses & Feedback</h2>
        {studentResponses.map((student, sIndex) => (
          <div key={sIndex} className="border-b p-3">
            <h3 className="font-bold">{student.student}</h3>
            {student.answers.map((q, qIndex) => (
              <div key={qIndex} className="mt-2">
                <p className="font-semibold">{q.question}</p>
                <p className="text-gray-700">Answer: {q.answer}</p>
                <textarea
                  className="border p-2 w-full mt-1"
                  placeholder="Leave feedback..."
                  value={q.feedback}
                  onChange={(e) => handleFeedbackChange(sIndex, qIndex, e.target.value)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Send Invitations Section */}
      <div className="bg-white p-4 shadow-md rounded-lg mt-6">
        <h2 className="text-xl font-bold">Send Invitations</h2>
        <textarea
          className="border p-2 w-full"
          placeholder="Enter student emails, separated by commas"
          value={emails}
          onChange={(e) => setEmails(e.target.value)}
        />
        <button onClick={sendInvitations} className="bg-green-500 text-white px-3 py-1 rounded-md mt-2">
          Send Invitations
        </button>
      </div>
    </div>
  );
};

export default Assessments;
