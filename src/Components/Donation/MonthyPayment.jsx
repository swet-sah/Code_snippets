import React from 'react'
import SelectState from './SelectState'
import './Donationform.css'


const MonthyPayment = () => {
   
    return (
        <>

            <div className="row">
                <div className="col-6 d-flex flex-column gap-3">
                    <div className='d-flex gap-2 name-tag'>
                        <select name="tag" id="tag" className='form-select'>
                            <option value="mr">Mr</option>
                            <option value="ms">Ms</option>
                            <option value="mrs">Mrs</option>
                            <option value="miss">Miss</option>
                        </select>
                        <input type="text" name="name" id="name" placeholder='Name*' className='form-control' />
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <input type="email" name="email" id="email" placeholder='Email Id*' className='form-control' />
                        <input type="date" name="date" id="date" className='form-control' />
                        <label htmlFor="from">from:</label>
                        <input type="date" name="" id="" className='form-control' />
                        <label htmlFor="from">to:</label>
                        <input type="date" name="" id="" className='form-control' />
                        <input type="text" name='number' id='number' placeholder='Mobile No*' className='form-control' />
                        <input type="text" name="pan" id="pan" placeholder='PAN No*' className='form-control' />
                    </div>
                </div>
                <div className="col-6 d-flex flex-column gap-3">
                    <input type="text" name='address' id='address' placeholder='Address*' className='form-control' />
                    <input type="text" name='city' id='city' placeholder='City/Town*' className='form-control' />
                    <input type="text" name='code' id='code' placeholder='Zip Code*' className='form-control' />
                    <SelectState />
                    <select name="country" id="country" className='form-select'>
                        <option value="india">India</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default MonthyPayment
