import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import Home from './Pages/Home'
import UserList from './Pages/UserList'
import UserDetail from './Pages/UserDetail'
import EditPostUser from './Pages/EditPostUser'
import PostList from './Pages/PostUser'
import CommentUser from './Pages/CommentUser'

import { QueryClientProvider, QueryClient } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient();
function App() {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Router>

          <NavLink to="/user-list" style={{marginRight: "10px", marginLeft: "10px"}}>User List</NavLink> 
          <NavLink to="/user-detail/1" style={{marginRight: "10px", marginLeft: "10px"}}>User Detail</NavLink> 
          <NavLink to="/edit-user-Post"style={{marginRight: "10px", marginLeft: "10px"}}>Edit Post Id</NavLink> 
          <NavLink to="/post-list"style={{marginRight: "10px", marginLeft: "10px"}}>Post List</NavLink>
          <NavLink to="/Comment-user"style={{marginRight: "10px", marginLeft: "10px"}}>Comment User</NavLink>  
          <NavLink to="/home"style={{marginRight: "10px", marginLeft: "10px"}}>Home</NavLink><br /><br />

          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/edit-user-Post" element={<EditPostUser />} />
            <Route path="/post-list" element={<PostList />} />
            <Route path="/user-detail/:id" element={<UserDetail />} />
            <Route path="/comment-user" element={<CommentUser />} />
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
