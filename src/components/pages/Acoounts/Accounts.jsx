import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useState, useEffect } from "react";
import { useRef } from "react";
import "./Accounts.css";

const Accounts = () => {
  let accountData = JSON.parse(localStorage.getItem('userdata')) || {}
  const [accountuser, setAccountUser] = useState(accountData && accountData.accountsPage)
  const [userSelect, setUserSelect] = useState(null)
  const myarr = Object.keys(accountData.accountsPage)
  const [option , setoptions] = useState(myarr)

  useEffect(() => {
    let newAdminuser = accountData.accountsPage
    setAccountUser(newAdminuser[userSelect])
  }, [userSelect])


  const selectuser = (e) => {    
    setUserSelect(e.target.value);

  }

  const deleteUser = (e) => {
    e.preventDefault()
    setUserSelect(null)
    delete accountData.accountsPage[userSelect]
    setAccountUser({...accountData.accountsPage})
    setoptions(Object.keys(accountData.accountsPage))
}


  let image = "https://images.unsplash.com/photo-1491616569293-e27f7f4cd41a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFjayUyMG9mJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80"

  return (
    <>
      <Navbar />
      <section className="account-container">
        <div className="user-select">
          <h2>List of Accounts</h2>
          <label htmlFor="" className="mt-3">
            Accounts
          </label>
          <select name="userAccount" id="" className="user-option" onChange={selectuser} >
            <option value="">Select User</option>
            {option && option.map((user, idx) => (
          
         <option key={idx} value={user}>{user}</option>
    ))}

          </select>
        </div>
        <main>
          <div className="account-left">
            <h2>Change Avatar</h2>
            <img
              src={userSelect && accountuser ? accountuser.profilePic : image}
              alt=""
              width="80%"
            />
            <button className="btn add-product mt-0">Upload New Photo</button>
          </div>
          <div className="account-right">
            <h2 className="mx-5 mb-3">Account Setting</h2>
            <div className="input-box input-left-box">
              <div>
                <label htmlFor="Product-name">Product Name</label> <br />
                <input type="text" name="name" value={userSelect && accountuser ? accountuser.name : ''} />
              </div>
              <div>
                <label htmlFor="Product-name">Account Email</label> <br />
                <input type="text" name="name" value={userSelect && accountuser ? accountuser.email : ''} />
              </div>
            </div>
            <div className="input-box input-left-box">
              <div>
                <label htmlFor="Product-name">Password</label> <br />
                <input type="password" name="name" value={userSelect && accountuser ? accountuser.password : ''} />
              </div>
              <div>
                <label htmlFor="Product-name">Re-enter Password</label> <br />
                <input type="text" name="name" />
              </div>
            </div>
            <div className="input-box input-left-box">
              <div>
                <label htmlFor="Product-name">Phone</label> <br />
                <input type="text" name="name" value={userSelect && accountuser ? accountuser.phone : ''} />
              </div>
              <div className="w-100">
                <button className="btn account-btn">Update Your Profile</button>
              </div>
            </div>
            <button className="btn add-product mt-4" onClick={deleteUser}>Delete Your Account</button>
          </div>
        </main>
      </section>
    </>
  );
};

export default Accounts;
