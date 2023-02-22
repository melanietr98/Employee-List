import { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import Form from "../components/Form";
import Form2 from "../components/Form2";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

function HomePage({ employees, addEmployee }) {
  let [showForm, setShowForm] = useState(false);

  return (
    <div className="home">
      <Header header="Employee Directory" />
      <SearchBar />
      <EmployeeList employees={employees} />
      {showForm && (
        <Form2 addEmployee={addEmployee} setShowForm={setShowForm} />
      )}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide" : "Add Employee"}
      </button>
    </div>
  );
}

export default HomePage;
