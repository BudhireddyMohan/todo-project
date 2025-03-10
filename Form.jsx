import React, { useState } from "react";

const Form = () => {
  const [task, settask] = useState("");
  const [assign, setassign] = useState([]);

  const data = (event) => {
    settask(event.target.value);
  };

  const updating = () => {
      setassign([...assign, task]);
  };

  const deletetask = (index) => {
    let updatedassign = [];
    for (let i = 0; i < assign.length; i++) {
      if (i !== index) {
        updatedassign.push(assign[i]);
      }
    }
    setassign(updatedassign);
  };

  return (
    <div style={{ backgroundColor: "#f4f4f4", height: "100vh", paddingTop: "50px" }}>
      <center>
        <div style={{
          width: "400px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}>
          <h2 style={{ color: "#333" }}>✅ TODO PROJECT</h2>
          <input 
            type="text" 
            placeholder="Enter your task" 
            value={task} 
            onChange={data} 
            style={{
              width: "80%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px"
            }}
          />
          <button 
            onClick={updating} 
            style={{
              padding: "8px 12px",
              marginLeft: "10px",
              border: "none",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            ➕ Add Task
          </button>

          <h4 style={{ marginTop: "20px", color: "#555" }}>📋 Tasks To-Do</h4>
          <ul style={{ listStyle: "none", padding: "0" }}>
            {assign.map((task, index) => (
              <li 
                key={index} 
                style={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  margin: "5px 0",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
                }}
              >
                {task} 
                <button 
                  onClick={() => deletetask(index)} 
                  style={{
                    padding: "5px 10px",
                    border: "none",
                    backgroundColor: "#dc3545",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  ❌ Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </center>
    </div>
  );
};

export default Form;

