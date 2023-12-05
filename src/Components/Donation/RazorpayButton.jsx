import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

const RazorpayButton = ({ amount, currency, name, description, apiKey, onSuccess }) => {
    const razorpayRef = useRef();
    let rzp = null;
    useEffect(() => {

        const options = {
            key: apiKey,
            amount: amount.toString(),
            currency: currency,
            name: name,
            description: description,
            handler: function (response) {
                onSuccess(response);
            },
        };

        rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
            console.log('Payment failed!');
        });

        razorpayRef.current.addEventListener('click', openRazorpay);

        return () => {
            if (razorpayRef.current) {
                razorpayRef.current.removeEventListener('click', openRazorpay);
            }
        };
    }, []);

    const openRazorpay = () => {
        rzp.open();
    };

    return (
        <div>
            <Button variant="secondary m-4 next-button" ref={razorpayRef}> <BsArrowRight /></Button>
        </div>
    );
};

export default RazorpayButton;
