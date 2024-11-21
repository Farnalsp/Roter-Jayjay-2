import React from 'react';
import { useUser } from '../UserContext';

const CommentUser  = () => {
    const { userName } = useUser();

    return (
      <h1>Hello, {userName}!</h1>
    );
};

export default CommentUser ;