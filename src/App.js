import React, { useState } from 'react'

const App = () => {
  const data={name:"",email:""}
  const[inputData,setInputData]=useState(data)
function handleData(){

}

  return (
   
  <div className="container">
      
      <div className="left-container" id="left-container">
      
        <div className="left-header">
          <div className="logo-img">
            <img src="./images/regionsmortgage.png" alt="" />
          </div>
          <div>
            <span >Are you new custommer? </span>

            <button className="enrol-button">Enrol Now</button>
          </div>
        </div>
       
        <form action="" className="from">
          <h2>Welcome Back</h2>
          <span 
            >sign in to Resign My Mortage Account
          </span>
         
          <div className="from-input">
            <div>
              <input type="text" placeholder="Online id" id="onlineid" value={inputData.onlineid} onChange={handleData}/>
            </div>
            <div>
              <input type="password" placeholder="Password" id="password" value={inputData.password} onChange={handleData}/>
            </div>
          </div>
         
          <div className="check-box">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
       
          <div className="button">
            <button type="submit" id="login">Login</button>
          </div>
        </form>
       
      </div>

  
      <div className="image-box">
        <div className="right-container">
          <img src="./images/house.png" alt="" id="image" />
        </div>
      </div>
    </div>

  
  )
}

export default App