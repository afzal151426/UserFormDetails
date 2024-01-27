import React from 'react'

function Step2({handleChange,formData,handleSubmit}) {
  return (
    
        <form>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
        //   value={formData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
        //   value={formData.state}
          onChange={handleChange}
          required
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
        //   value={formData.city}
          onChange={handleChange}
          required
        />

        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
        //   value={formData.country}
          onChange={handleChange}
          required
        />

        <label htmlFor="pincode">Pincode:</label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          pattern="[0-9]{6}"
        //   value={formData.pincode}
          onChange={handleChange}
          required
        />

        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    
  )
}

export default Step2;
