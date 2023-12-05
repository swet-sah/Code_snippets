import React, { useContext, useState } from 'react'
import OnetimePayment from './OnetimePayment'
import MonthyPayment from './MonthyPayment';
import { BsArrowLeft } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import RazorpayButton from './RazorpayButton';
import { DonationContext } from './DonationContext';

const Donationform = () => {
    const handlePaymentSuccess = (response) => {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
    };
    const {money,togglepage} = useContext(DonationContext);
    const [toggled, setToggled] = useState(true);
    return (
        <>

            <div className="d-flex">
                <div className={`tab-button ${toggled ? 'active' : ''}`} onClick={() => { setToggled(true) }}>One Time Payment </div>
                <div className={`tab-button ${toggled ? '' : 'active'}`} onClick={() => { setToggled(false) }}>Monthly Payment </div>
            </div>
            {
                (toggled) ? <OnetimePayment /> : <MonthyPayment />
            }
            <div className="form-buttons d-flex justify-content-between">
                <Button variant="secondary m-4 prev-button" onClick={() => { togglepage("money") }}> <BsArrowLeft /> </Button>
                <RazorpayButton
                    amount={parseInt(money) * 100} // Amount in paise (e.g., 50000 paise = ₹500)
                    currency="INR"
                    name="Your Company Name"
                    description="Purchase Description"
                    apiKey="rzp_test_mW2JqqCgaKkfMw"
                    onSuccess={handlePaymentSuccess}
                />

            </div>


        </>
    )
}

export default Donationform
