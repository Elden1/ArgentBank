import './assets/style.scss'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import { userLogin } from '../../Redux/Actions/authActions'

let Form = () =>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)

  const {
      register,
      handleSubmit,   
      formState: { errors }
      } = useForm()
  
      const submitForm = async (data) => {
          try {
            setIsLoading(true);
            dispatch(userLogin(data));
            setTimeout(() => {
              let userToken = localStorage.getItem('userToken')
              if(userToken != null) {
                navigate('/user')
              }
              setIsLoading(false);
            }, 1000);
          } catch (error) {
            
          } 
        };

return (
        <div className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="fa fa-user-circle sign-in-icon"/>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit(submitForm)}>    
            <div className='input-wrapper'>
                <label htmlFor="email">Email</label>
                <input name="email" {...register("email", { required: true })} />
                {errors.username && <p>This field is required</p>}                
            </div>
            <div className='input-wrapper'>
                <label htmlFor="password">Password</label>
                <input name="password" {...register("password", { required: true })} />
                {errors.password && <p>This field is required</p>}
            </div>
            <div className='input-remember'>
            <input type="checkbox" id="remember-me"></input>
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
          {isLoading ? 'Loading...' : 'Sign in'}
        </button>
            </form>
        </div>
    )
}

export default Form