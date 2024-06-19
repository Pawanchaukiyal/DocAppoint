import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Department from '../components/Department'
import MessageForm from '../components/MessageForm'
const Home = () => {
  return (
    <>
      <Hero title={"Welcome to the Govind Health Care Centre | Affordable and trustable "} imgUrl={"/hero.png"}/>
      <Biography imgUrl={"/about.png"}/>
      <Department/>
      <MessageForm/>
    </>
  )
}

export default Home
