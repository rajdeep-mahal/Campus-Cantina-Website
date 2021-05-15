import React from 'react';
import { setAppUser } from '../redux/actions/appUserActions';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Signout = () => {
  const dispatch = useDispatch();

  axios
  .get('http://localhost:3001/api/appuser/signout')
  .then((res) => {
    dispatch(setAppUser(res.data));
  });

  return (
    <Redirect to="/" />
  );
}

export default Signout;
