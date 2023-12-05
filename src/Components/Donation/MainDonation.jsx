import React, { useContext, useEffect, useState } from 'react'
import Donationform from './Donationform';
import Money from './Money';
import './Donationform.css'
import { RxCross2 } from 'react-icons/rx';
import { DonationContext } from './DonationContext';

const MainDonation = () => {
    const {page,money,togglepage,onMoneyChange,setdonatePage}= useContext(DonationContext)
    
    return (
        <>
            <section className='py-5'>

                <div className="container px-3 py-3  d-flex flex-column  centeredDiv ">
                    <div style={{position:"absolute",top:"20px",right:"30px"}}>
                        <RxCross2 size={"26px"} onClick={()=>{setdonatePage(false)}} />
                    </div>
                    {
                        (page === "detail") ? (<Donationform togglepage={togglepage} money={money} />) : <Money togglepage={togglepage} onMoneyChange={onMoneyChange} money={money} />
                    }
                </div>
            </section>
        </>

    )
}

export default MainDonation
