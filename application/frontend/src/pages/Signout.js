import React from 'react';
import { setAppUser } from '../redux/actions/appUserActions';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Signout = () => {
  const dispatch = useDispatch();

  axios.get('/stop-session').then((res) => {
    dispatch(setAppUser(res.data));
  });

  return <Redirect to="/" />;
};

export default Signout;
