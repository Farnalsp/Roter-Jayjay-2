import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userid } = useParams(); 
  return <h1>User Detail for User ID: {userid}</h1>;
};

export default UserDetail;
