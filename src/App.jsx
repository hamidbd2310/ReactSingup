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

  const SaveData = async (e) => {
    e.preventDefault();
  
    if (loginData.password.length < 8) {
      alert("Password must be at least 8 characters long.");
    } else {
      try {
        const response = await axios.post(
          "https://api.bseba.com/api/registration",
          loginData
        );
  
        // Assuming the API returns some data
        console.log("API response:", response.data);
  
        alert(response.data.message); // Alert the message from the API response
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while saving data. Please try again later.");
      }
    }
  };
  

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