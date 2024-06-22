import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogData from "../data/posts";


const Update = () => {
  const navigate = useNavigate();
  const {postID} = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://postpartum-momma.onrender.com/api/blog/${postID}`, {
  method: "GET",
})
  .then((response) => response.json())
  .then((result) => setPost(result.data))
  .catch((error)=> console.log(error))
}, []);

const handleUpdateSubmit = (event) => {
    event.preventDefault();
    console.log("This method ran...")
    const body = {
      banner: event.target.banner.value,
      title: event.target.title.value,
      blurb: event.target.blurb.value,
      article: event.target.article.value,
      upload: event.target.upload.value
      }
      fetch(`https://postpartum-momma.onrender.com/api/blog/${postID}`, {
        method: "PUT",
        body: JSON.stringify
      })
        .then((response) => response.json())
        .then((result) => console.log(result), navigate("/admin"))
        .catch((error)=> console.log(error))
}
return (
      <div>
      <span className="container1">
        <h1 className="page-title">Update Blog Post</h1>
        <span className="banner">
            <input type="file" accept="image" id="banner-upload" hidden/>
            <label htmlFor="banner-upload" className="banner-upload-btn"><i className="fa fa-upload" aria-hidden="true"></i></label>
        </span>
        <br/>
        <span className="blog">
            <textarea type="text" className="title" placeholder="Blog title..."></textarea>
            <textarea type="text" className="article" placeholder="Start writing here..."></textarea>
        </span>

        <span className="blog-options">
            <button className=" publish-btn" onSubmit= {handleUpdateSubmit}>Publish</button>
        </span>
    </span>
    </div>
    )
  }

export default Update;