import React from 'react';
import { modifAction } from '../../Redux/Actions/modifAction';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Modificator = ({ onFormSubmit }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitForm = async (data) => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(modifAction(data));
      onFormSubmit();
      reset(); 
      setIsLoading(false)
    }, 500);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className='input-wrapper'>
          
          <label htmlFor="modif">Ici pour modifier votre surnom</label>
          <input
            type="text"
            name="modif"
            {...register('userName', { required: true })}
            required
          />
          {errors.userName && <p>This field is required</p>}
        </div>
        <button type="submit" className="transaction-button">
        {isLoading ? 'Loading...' : 'Modifier'}
        </button>
      </form>
    </>
  );
};

export default Modificator;