import React, { useState, useEffect } from "react";
// import blogData from "../data/posts";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=> { 
    fetch(`https://postpartum-momma.onrender.com/api/blog`)
    .then((response) => response.json())
    .then((result) => {
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
              src={`./images/${post.banner}`}
              className="blog-image"
              alt={`${post.title}`}
          
            />
            <h1 className="blog-title">{post.title}</h1>
            <p className="blog-overview">
              {post.blurb}
            </p>
            <input type="button" className="blog-button" value="READ" />
          </div>
          ))}
          

          {/* <span className="blog-card">
            <img
              src="./images/diastasis-recti.png"
              className="blog-image"
              alt="diastasis-recti"
            />
            <h1 className="blog-title">Restore your Core</h1>
            <p className="blog-overview">Mommy pooch? Do I even know her? </p>
            <input type="button" className="blog-button" value="READ" />
          </span> */}

          {/* <span className="blog-card">
            <img
              src="./images/tummy-time.jpeg"
              className="blog-image"
              alt="luca-tummy-time"
            />
            <h1 className="blog-title">Play Kits</h1>
            <p className="blog-overview">
              Play is such an integral part of your baby's development. But how
              do I play with my baby? These kits take out all the guessing.
            </p>
            <input type="button" className="blog-button" value="READ" />
          </span> */}

          {/* <span className="blog-card">
            <img
              src="./images/formula-banner.jpeg"
              className="blog-image"
              alt="baby-formula"
            />
            <h1 className="blog-title">
              Choosing the Right Formula for your Baby
            </h1>
            <p className="blog-overview">
              With so many formula's on the market how do I know which is the
              right fit for me and my baby? Truth is...there is no one size fits
              all, but here are some of our personal favs.
            </p>
          </span> */}

          <input type="button" className="blog-button" value="READ" />
        </span>
      </span>
    </div>
  );
};

export default Home;
