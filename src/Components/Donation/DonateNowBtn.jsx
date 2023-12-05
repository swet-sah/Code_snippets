import React, { useContext } from 'react'
import { DonationContext } from './DonationContext'
import MainDonation from './MainDonation';
import { Button } from 'react-bootstrap';

const DonateNowBtn = () => {
    const {handleClick,donatepage,setdonatePage} = useContext(DonationContext);
    return (
        <>
            <Button variant="secondary mx-3" onClick={() => { handleClick() }}>Donate now</Button>

            {
                donatepage && <MainDonation setIndex={setdonatePage} />
            }
        </>

    )
}

export default DonateNowBtn
