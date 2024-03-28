import axios from "axios";
import { useState } from "react";


const App = () => {

//State
const [loginData, setLoginData]=useState({mobile: "...", fullName: "...",})


const InputOnchange=(e)=>{
  let key=e.target.name;
  let value=e.target.value;
  setLoginData(loginData=>({
    ...loginData,
    [key]:value
  }))}

  const SaveData= async(e)=>{
    e.preventDefault();
   await axios.post("https://api.bseba.com/api/registration",loginData )
    
  }


//View

  return (
    <div>
     

    <form onSubmit={SaveData}>
    <input name="mobile" onChange={(e)=>{InputOnchange(e)}} type="number" placeholder="Mobile" /> <br />
    <input name="fullName" onChange={(e)=>{InputOnchange(e)}} type="text" placeholder="Full Name" /> <br />
    <input name="password" onChange={(e)=>{InputOnchange(e)}} type="password" placeholder="Password" /> <br />
    <button type="submit">Submit</button>
    </form>
    
    
    
     
    </div>
  );
};

export default App;