import React from 'react'
import Hero from '../components/Hero';
import AppointementForm from '../components/AppointementForm.jsx';
const Appointement = () => {
  return (
    <>
    <Hero
      title={"Schedule Your Appointment | ZeeCare Medical Institute"}
      imgUrl={"/signin.png"}
    />
    <AppointementForm/>
  </>
  )
}

export default Appointement
