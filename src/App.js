import "./index.css";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import EmployeePage from "./pages/EmployeePage";
import { data } from "./data";
import { Route, Routes, Navigate } from "react-router-dom";

export default function App() {
  let [employees, setEmployees] = useState(data);

  function addEmployee(emp) {
    setEmployees([...employees, emp]);
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<HomePage employees={employees} addEmployee={addEmployee} />}
        />

        <Route
          path="/employee/:id"
          element={<EmployeePage employees={employees} />}
        />
        {/* <HomePage employees={employees} addEmployee={addEmployee} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
