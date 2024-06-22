import React from 'react';
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    console.log("This method ran")
    const body = {
      banner: event.target.banner.value,
      title: event.target.title.value,
      blurb: event.target.blurb.value,
      article: event.target.article.value,
      upload: event.target.upload.value
    }
  }  
  fetch(`https://postpartum-momma.onrender.com/api/blog/create`, {
    method: "POST",
    body: JSON.stringify
  })
    .then((response) => response.json())
    .then((result) => navigate("/admin"))
    .catch((error)=> console.log(error))

    return (
      <div>
        <span className="container1">
        <h1 className="page-title">Create Blog Post</h1>
        <span className="banner">
            <input type="file" accept="image/*" id="banner-upload" hidden/>
            <label htmlFor="banner-upload" className="banner-upload-btn"><i className="fa fa-upload" aria-hidden="true"></i></label>
        </span>
        <br/>
        <span className="blog">
            <textarea type="text" className="title" placeholder="Blog title..."></textarea>
            <textarea type="text" className="blurb" placeholder="Write your home page blurb here..."></textarea>
            <textarea type="text" className="article" placeholder="Start writing here..."></textarea>
        </span>

        <span className="blog-options">
            <button onSubmit = {handleCreateSubmit} className=" publish-btn">Publish</button>
        </span>
    </span>
      </div>
    )
  }

export default Create;