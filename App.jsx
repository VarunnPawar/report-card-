import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", score: 75 },
    { id: 2, name: "deepak", score: 35 },
    { id: 3, name: "hiranmaya", score: 85 },
  ]);

  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const addStudent = () => {
    if (!name || score === "") return;

    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };

    setStudents([...students, newStudent]);
    setName("");
    setScore("");
  };

  const updateScore = (id, newScore) => {
    const updatedStudents = students.map((student) =>
      student.id === id
        ? { ...student, score: Number(newScore) }
        : student
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="container">
      <h1 className="title">📊 Student Report Card</h1>

      {/* No form here */}
      <div className="form">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />

        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="input"
        />

        <button onClick={addStudent} className="button">
          Add Student
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => {
            const status = student.score >= 40 ? "Pass" : "Fail";

            return (
              <tr key={student.id}>
                <td>{student.name}</td>

                <td>
                  <input
                    type="number"
                    value={student.score}
                    onChange={(e) =>
                      updateScore(student.id, e.target.value)
                    }
                    className="input"
                  />
                </td>

                <td className={status === "Pass" ? "pass" : "fail"}>
                  {status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;