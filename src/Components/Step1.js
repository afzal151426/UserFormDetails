import React from 'react'

function Step1({handleSubmit,handleChange,formData}) {
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <div className="step1">
     <div className="personelDetails">
      <h3>Personel Details:</h3>
     <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          pattern=".{3,}"
          name="name"
          value={formData.name}
        //   onChange={handleChange}
          required
        />
          <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
        //   onChange={handleChange}
          required
        />
         <label htmlFor="sex">Sex:</label>
        <select
          id="sex"
          name="sex"
          value={formData.sex}
        //   onChange={handleChange}
          required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
     </div>

        <label htmlFor="mobile">Mobile:</label>
        <input
          type="tel"
          id="mobile"
          pattern="^\+91[1-9][0-9]{9}$"
          name="mobile"
          value={formData.mobile}
        //   onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          name="email"
          value={formData.email}
        //   onChange={handleChange}
          required
        />

        <label htmlFor="govid">Government ID:</label>
        <select required >
          <option value="Aadhar">Aadhar</option>
          <option value="Pan">PAN</option>
        </select>
        <input
          type="text"
          id="govid"
          name="govid"
          placeholder="Enter Gov ID"
          value={formData.govid}
        //   onChange={handleChange}
          required
        />
      </div>
      </form>
    </div>
  )
}

export default Step1
