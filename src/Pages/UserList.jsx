import React from 'react'   
import axios from 'axios'
import {useInfiniteQuery} from 'react-query'
import { useEffect } from 'react';
import { useUser } from '../UserContext';
import { useLocation } from 'react-router-dom';


const postlList = ({pageParam=1})=>{ 
  return axios.get('http://localhost/api/article-list?id='+pageParam)
}
const UserList = () => {
const { setUserName } = useUser();
  const location = useLocation(); 
     useEffect(() => {
    console.log('URL berubah:', location.pathname);
  }, [location]);

  const {hasNextPage,fetchNextPage} =  useInfiniteQuery(['infiniteUser'],postlList,{

    getNextPageParam:(_lastPage,pages)=>{
      if(pages.length < 5){
        return pages.length + 1
      }else{
        return
      }
    }
  })
 const handleUserClick = (user) => {
    setUserName(user.name);
  };
const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ];
 console.log(hasNextPage)
  return (
    <div className='text-ms'>
      <div>UserList Page</div>   
      <ul>
        
      {users.map((user) => (
        <li key={user.id} onClick={() => handleUserClick(user)}>
          {user.name}
        </li>
      ))}
    </ul>
      <button onClick={fetchNextPage}>Next</button>
    </div>
  )
}

export default UserList