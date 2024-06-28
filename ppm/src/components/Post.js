import React from 'react';
import '../Posts.css'
import {useLocation} from 'react-router-dom';
import '../mediaQueries.css'

const Post = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      <span>{location.state.post}</span>
      <div className="container1">
            <div key={location.state.post_id}>
            <img
              src={`/images/${location.state.banner}`}
              className="post-image"
              alt={`${location.state.title}`}
          
            />
            <h1 className="post-title">{location.state.title}</h1>
            <p className="post-article">
              {location.state.article}
            </p>

            {location.state.upload}
            
          </div>
      
          
        
        </div>
      
    </div>
)}

export default Post;