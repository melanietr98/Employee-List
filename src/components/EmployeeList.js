import Employee from "./Employee";
import { Link } from "react-router-dom";

function EmployeeList({ employees }) {
  return (
    <div className="emp-list">
      {employees.map((employee) => (
        <Link key={employee.id} to={`/employee/${employee.id}`}>
          <Employee key={employee.id} employee={employee} />
        </Link>
      ))}
    </div>
  );
}
export default EmployeeList;
