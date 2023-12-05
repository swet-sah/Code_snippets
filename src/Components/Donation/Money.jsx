import React, { useContext, useState } from 'react'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { DonationContext } from './DonationContext';

const Money = () => {
    const amountarr = ["1500", "3000", "5000", "10000"]
    const {togglepage,onMoneyChange,money} = useContext(DonationContext);
    const handleInput = (amnt) => {
        if (money === amnt) {
            onMoneyChange("")
        }
        else onMoneyChange(amnt)
    }
    return (
        <>

            <h1>Support The Cause</h1>
            <div className='money-container d-flex flex-column justify-content-center'>
                <h2 >Make the difference</h2>
                <p>Rs.</p>
                <div className="d-flex">
                    {
                        amountarr.map((amnt) => {
                            return (
                                <div key={amnt} >
                                    <input type="checkbox" name={amnt} id={amnt} checked={money === amnt}
                                        onClick={() => {
                                            handleInput(amnt)
                                        }} />
                                    <label htmlFor="" style={{ marginRight: '10px' }}>{amnt}</label>
                                </div>
                            )
                        })
                    }
                </div>
                <input type="text" placeholder='other amount' value={money} onChange={(e) => {
                    onMoneyChange(e.target.value)
                }} className='form-control w-100' />
                <Button variant='btn btn-secondary my-4' onClick={() => {
                    togglepage("detail")
                    onMoneyChange(money)
                }}>Donate Now<BsArrowRight /></Button>
            </div>

        </>
    )
}

export default Money
