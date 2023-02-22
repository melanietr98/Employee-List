import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

// import {NavigationContainer} from "@react-navigation/native"
// import {createNativeStackNavigator} from '@react-navigation/native-stack'

function EmployeePage({ employees }) {
  let navigate = useNavigate(); // returns function
  let { id } = useParams();

  // const Stack = createNativeStackNavigator();

  function goBack() {
    navigate("/");
  }

  return (
    <div className="EmployeePage">
      {/* <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen name ="Home" component = {EmployeePage}/>
     </Stack.Navigator>
     </NavigationContainer> */}

      <div>
        <Header header="Employee" />
        <button onClick={goBack}>Back</button>
      </div>
      <div>
        {employees
          .filter((employee) => employee.id === id)
          .map((employee) => (
            <div className="info-card" key={employee.id}>
              <div
                className="emp"
                style={{ border: `1px solid ${employee.borderColor}` }}
              >
                <img src={employee.headshot} alt="employee" />
                <h4>{employee.name}</h4>
                <p>{employee.title}</p>
              </div>
              <div className="contact">
                <div className="phone">
                  <span>Phone</span>
                  <p>{employee.phone}</p>
                </div>
                <div className="email">
                  <span>Email</span>
                  <p>{employee.email}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default EmployeePage;
