import React from "react";
import Header from '../../Containers/Header'
import Footer from '../../Containers/Footer'
import './assets/style.scss'
import '../../Pages/Home/assets/style.scss'

import { useNavigate } from "react-router-dom"; 
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/Actions/fetchData' 
import User from '../../Components/User'

let Account = () => {
  let navigate = useNavigate()
  let userToken = localStorage.getItem('userToken')
  if(userToken === null) {
    navigate('/login')
  }

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

return ( 
  <section className="main-user">
      <Header />
        <div className="main bg_dark">
            <div className="header">
              <User  
              userData={userData} />
              
              <button onClick={() => navigate('/modification')} className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
        </div>
      <Footer />
  </section>
)
}

export default  Account