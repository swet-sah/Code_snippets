import React from 'react'
import CustomNavbar from './Navbar/CustomNavbar'
import UpperNav from './Navbar/UpperNav'
import Footer from './footer/Footer'
import MainDonation from './Donation/MainDonation'
import Slider from './homestuffs/Slider'
import BasicCard1 from './Cards/BasicCard1'
import Loginpage from './LoginPage/Loginpage'
import Feed from './NewsAndAnnouncements/Feed'
import Faq from './NewsAndAnnouncements/FAQ/Faq'
import Messaging from './Chatbot/Messaging'
import MainMess from './Chatbot/MainMess'
import AlumniManagement from './AlumniData/AlumniData'



const Body = () => {
  return (
    <>
    <MainDonation/>
      {/* <UpperNav/> */}
    {/* < CustomNavbar/> 
      <Slider/>
      
      <Faq/>
      <Feed/>
       <Loginpage/>
      <Footer/>
      <AlumniManagement/> */}
    </>
  )
}

export default Body
