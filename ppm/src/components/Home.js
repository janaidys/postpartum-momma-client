import React, { useState, useEffect } from "react";
// import '../index';
import '../Home.css'
// import blogData from "../data/posts";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=> { 
    fetch(`https://postpartum-momma.onrender.com/api/blog`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      if (result.statusCode === 200) {
        setPosts(result.data)
      }
    })
    .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    console.log(posts)
  }, [posts])

  return (
    <div>
      <span className="container1">
        <span className="blogs-section">
          {posts.map((post) => (
            <div key={posts.post_id}className="blog-card">
            <img
              src={`/images/${post.banner}`}
              className="blog-image"
              alt={`${post.title}`}
          
            />
            <h1 className="blog-title">{post.title}</h1>
            <p className="blog-overview">
              {post.blurb}
            </p>
            <button className="blog-button">READ</button>
          </div>
          ))}
          
        
        </span>
      </span>
    </div>
  );
};

export default Home;
