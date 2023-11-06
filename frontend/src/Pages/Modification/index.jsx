import React, { useState, useEffect } from "react";
import Header from "../../Containers/Header";
import Footer from "../../Containers/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/Actions/fetchData";
import Modificator from "../../Components/Modificator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './assets/style.scss'

let Modification = () => {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (userData.userIntel === null) {
    return (
      <section className="main-modif">
      <Header isAuthenticated={true} userData={userData} />
      <section className="main bg_dark">
      <section className="sign-in-content modif">
      <FontAwesomeIcon icon={faCircleUser} className="fa fa-user-circle sign-in-icon"/>
      <h2>Current username : loading...</h2>
      <Modificator />
      </section>
      </section>
      <Footer />
    </section>
    );
  }

  const handleFormSubmit = () => {
      dispatch(fetchData());
  };

  return (
    <section className="main-modif">
      <Header isAuthenticated={true} userData={userData} />
      <section className="main bg_dark">
      <section className="sign-in-content modif">
      <FontAwesomeIcon icon={faCircleUser} className="fa fa-user-circle sign-in-icon"/>
      <h2>Current username : {userData.userIntel.userName}</h2>
      <Modificator 
      onFormSubmit={handleFormSubmit} />
      </section>
      </section>
      <Footer />
    </section>
  );
};

export default Modification;