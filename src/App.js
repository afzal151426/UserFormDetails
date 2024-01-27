import {useState} from "react";
import "./App.css";
import DataTable from "react-data-table-component";
import UserRegistrationForm from "./Components/UserRegistrationForm";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";

function App() {
  const columns = [
    {name: "PatientName", selector: (row) => row.name},
    {name: "Email", selector: (row) => row.email},
    {name: "DOB", selector: (row) => row.dob},
    {name: "Sex", selector: (row) => row.sex},
    {name: "Phone Number", selector: (row) => row.phone},
    {name: "GovID", selector: (row) => row.govId},
    {name: "Address", selector: (row) => row.address},
    {name: "State", selector: (row) => row.state},
    {name: "city", selector: (row) => row.city},
    {name: "Country", selector: (row) => row.country},
    {name: "PIN Code", selector: (row) => row.pincode}
  ];
  const data = [
    {
      id: 1,
      name: "afzal",
      email: "afzal151426@gmail.com",
      dob: "19/10/1999",
      sex: "male",
      phone: "7078974175",
      govId: "107122616",
      address: "Dhaura tanda",
      state: "uttar pradesh",
      city: "bareilly",
      country: "5000",
      pincode: "22",
    },
    {
      id: 1,
      name: "afzal",
      email: "afzal151426@gmail.com",
      dob: "19/10/1999",
      sex: "male",
      phone: "7078974175",
      govId: "107122616",
      address: "Dhaura tanda",
      state: "uttar pradesh",
      city: "bareilly",
      country: "5000",
      pincode: "22",
    },
    {
      id: 1,
      name: "afzal",
      email: "afzal151426@gmail.com",
      dob: "19/10/1999",
      sex: "male",
      phone: "7078974175",
      govId: "107122616",
      address: "Dhaura tanda",
      state: "uttar pradesh",
      city: "bareilly",
      country: "5000",
      pincode: "22",
    }
  ];
  const updater = (formValue) => {
    console.log(formValue);
    data.push(formValue);
  };
  
  const [records, SetRecords] = useState(data);
  function handleFilter(e) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    SetRecords(newData);
  }

  return (
    <>
      <h1>This is my first Frontend Data-table in reactjs projects</h1>
      <UserRegistrationForm
        data={records}
        updater={updater}>
      </UserRegistrationForm>
      <div>
        <span className="search">
          <input
            type="text"
            onChange={handleFilter}
            placeholder="Search"></input>
        </span>
      </div>
      <h2 className="container">Registered User Details:</h2>
      <DataTable data={records} columns={columns}></DataTable>
    </>
  );
}

export default App;
