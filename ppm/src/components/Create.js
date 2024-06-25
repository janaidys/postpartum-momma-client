import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Create.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/free-solid-svg-icons";


const Create = () => {
  const navigate = useNavigate();

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    console.log("This method ran")
    const body = {
      banner: event.target.banner.value,
      title: event.target.title.value,
      blurb: event.target.blurb.value,
      article: event.target.article.value
    }
    console.log(body);
    
  fetch(`http://localhost:3000/api/blog/create/new`, {
    method: "POST",
    body: JSON.stringify(body)
  })
    .then((response) => response.json())
    .then((result) => {console.log(result); navigate("/admin")})
    .catch((error)=> console.log(error))
  }
    return (
      <div>
        <div className="container1">
        <h1 className="page-title">Create Blog Post</h1>
        <form onSubmit = {handleCreateSubmit} >
        <div className="banner">
            <input name="banner" type="file" accept="image/*" id="banner-upload"/>
            <label htmlFor="banner-upload" className="banner-upload-btn"><i className="fa fa-upload" aria-hidden="true"></i></label>
        </div>
        <br/>
        <span className="blog">
            <textarea name="title" type="text" className="title" placeholder="Blog title..."></textarea>
  
            <textarea name="blurb" type="text" className="blurb" placeholder="Write your home page blurb here..."></textarea>
            <textarea name="article" type="text" className="article" placeholder="Start writing here..."></textarea>
        </span>

        <span className="blog-options">
            <button className=" publish-btn">Publish</button>
        </span>
        </form>
    </div>
      </div>
    )
  }

export default Create;