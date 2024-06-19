import React, { useState } from 'react'
import axios from "axios"; // to send data for backened
import {toast} from "react-toastify"

const MessageForm = () => {
  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");
  const[email,setEmail] = useState("");
  const[phone,setPhone] = useState("");
  const[message, setMessage] = useState("");

  const handleMessage =async(e)=>{
    // to prevent the refersh everytimr on sumbit the phone
     e.preventDefault();
     try {
      await axios.post("http://localhost:4000/api/v1/message/send",
        {firstName,lastName,email,phone,message},
        {
          withCredentials:true,
          headers:{"Content-Type":"application/json"},
        }
      ).then((res)=>{
        toast.success(res.data.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        
      })
      
     } catch (error) {
      toast.error(error.response.data.message);
     }
  }
  return (
    <>
    <div className='container form-component message-form'>
      <h2>Send us a message</h2>
      <form onSubmit={handleMessage}> 
    <div>
    <input type="text"
    placeholder='FirstName' value={firstName}
    onChange={(e)=> setFirstName(e.target.value)}/>

     <input type="text"
    placeholder='LastName' value={lastName}
    onChange={(e)=> setLastName(e.target.value)}/>
    </div>

    <div>
    <input type="text"
    placeholder='Email' value={email}
    onChange={(e)=> setEmail(e.target.value)}/>

     <input type="text"
    placeholder='Enter Mobile number.' value={phone}
    onChange={(e)=> setPhone(e.target.value)}/>
    </div>

    <textarea rows={7} placeholder='Message' 
    value={message} onChange={(e)=>setMessage(e.target.value)}
    />

    <div style={{justifyContent:"center",alignItems:"center"}}>
      <button type="submit">Send</button>
    </div>
    </form>
    <img src="/vector.png" alt="vector"/>
    </div>
    </>
  )
}

export default MessageForm
