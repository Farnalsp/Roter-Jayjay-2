import React from 'react';
import { useParams } from 'react-router-dom';

const EditPostUser = () => {
  const { userid, postId } = useParams();

  return (
    <h1>
      Editing Post ID: {postId} for User ID: {userid}
    </h1>
  );
};

export default EditPostUser;