import React from 'react'
const SelectState = () => {
    const states = [
        "Select State*","Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
        "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
        "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Ladakh", "Lakshadweep", "Puducherry"
    ];
    return (
       <select name="state" id="state" className='form-select'>
        {
            states.map((state)=>{
                return <option key={state} value={state}>{state}</option>
            })
        }
       </select>
    )
}

export default SelectState
