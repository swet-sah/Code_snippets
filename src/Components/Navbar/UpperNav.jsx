import React from 'react'
import { BsEnvelopeFill, BsTelephoneFill } from 'react-icons/bs'
import './UpperNav.css'
import Button from 'react-bootstrap/Button';


const UpperNav = () => {
    return (
        <>
            <div className='d-flex align-items-center upper-nav p-1'>
                <h2 className='ms-3 my-2'>MySite</h2>
                <div className='d-flex justify-content-end align-items-center  mx-3 flex-grow-1 contact-section text-right'>
                    <div className='m-3'>
                        <BsTelephoneFill size={"20px"} className='mx-2 icon-fill' />
                        <a href="tel:+765457 47394">+765457 47394</a>
                    </div>
                    <div className='mx-3'>
                        <BsEnvelopeFill size={"20px"} className='mx-2 icon-fill' />
                        <a href="mailto:mildredy114@gmail.com">mildredy114@gmail.com</a>
                    </div>
                </div>
                <div className='login-btn'>
                    <Button variant="secondary mx-3">Log In</Button>
                </div>
            </div>
        </>
    )
}

export default UpperNav
