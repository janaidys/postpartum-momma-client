import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import blogData from "../data/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const Update = ({}) => {
  const navigate = useNavigate();
  const { postID } = useParams();

  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/blog/${postID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setPost(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    console.log("This method ran...");
    const body = {
      banner: event.target.banner.value,
      title: event.target.title.value,
      blurb: event.target.blurb.value,
      article: event.target.article.value,
    };
    console.log(body);
    fetch(`http://localhost:3000/api/blog/edit/${postID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate("/admin");
      })
      .catch((error) => console.log(error));
    
  };

  return (
    <div>
      <div className="container1">
        <h1 className="page-title">Update Blog Post</h1>
        <form onSubmit={handleUpdateSubmit}>
          <div className="banner">
            <input
              name="banner"
              type={"file"}
              accept="image/*"
              id="banner-upload"
              style={{ visibility: "hidden" }}
            />
            <label htmlFor="banner-upload" className="banner-upload-btn">
              <FontAwesomeIcon icon={faUpload} />
            </label>
          </div>
          <br />
          <span className="blog">
            <textarea
              name="title"
              type="text"
              className="title"
              placeholder="Blog title..."
            ></textarea>

            <textarea
              name="blurb"
              type="text"
              className="blurb"
              placeholder="Write your home page blurb here..."
            ></textarea>

            <textarea
              name="article"
              type="text"
              className="article"
              placeholder="Start writing here..."
            ></textarea>
          </span>

          <span className="blog-options">
            <button className="publish-btn">Publish</button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Update;
