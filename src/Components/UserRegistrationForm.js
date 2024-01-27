import React, {useState} from "react";


const UserRegistrationForm = (props) =>
 {
  const [formData, setFormData] = useState({name: "",email: "",dob: "",sex: "male",mobile: "",govid: "",address: "",state: "",city: "",country: "",pincode: ""});
let name,value;
  const handleChange = (e) => {
    name=e.target.name;
    value=e.target.value;
    // const {name, value} = e.target;
    setFormData({...formData, [name]: value});

 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updater(formData);
  
    // Handle form submission logic here
    // console.log("Form data submitted:", formData);
    // data=[{...formData}];

  };
const changeCountry=()=>{

}
  return (
 <div className="container">
    <form onSubmit={handleSubmit}>   
              <h2 className="heading">User Registration</h2>
      <div className="upperInfo">
         <div>
         <label htmlFor="email">Name:</label>
          <input
              type="text"
              placeholder="Enter your Name"
              id="name"
              // pattern=".{3,}"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
         </div>
         <div>
              <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
        </div>
        <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
        </div>
         
    </div>
    <div className="lowerInfo">
      <div>
          <label htmlFor="sex">Sex:</label>
            <select
              id="sex"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
      </div>
      <div>
         <label htmlFor="mobile">Mobile:</label>
            <input
              type="tel"
              id="mobile"
              pattern="^\+91[1-9][0-9]{9}$"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
    </div>
    <div>         
         <label htmlFor="govid">Government ID:</label>
            <select required   onChange={handleChange}>
              <option value="Aadhar">Aadhar</option>
              <option value="Pan">PAN</option>
            </select>
            <input
              type="text"
              id="govid"
              name="govid"
              placeholder="Enter Gov ID"
              value={formData.govid}
              onChange={handleChange}
              required
            />
     </div>
    
      </div>
   <div className="upperInfo">
      <div>
           <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
       </div>
       <div>
       <label htmlFor="country">Country:</label>
            <select type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              onClick={changeCountry}
              required>
              <option>India</option>
              <option>srilanka</option>
              <option>pakistan</option>
              </select>
      </div>      
      <div>
           <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
      </div>
  </div> 
  <div className="lowerInfo">
  <div> 
    <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
   </div>
      <div>
              <label htmlFor="pincode">Pincode:</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  // pattern="[0-9]{6}"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
      </div>
  </div>
  <div className="btnClass">
    <button className="btn" type="submit" >Clear Details</button>
    <button  className="btn" type="submit" >Submit Details</button>
 </div>
           

    </form>
  </div>
        );
};

export default UserRegistrationForm;
