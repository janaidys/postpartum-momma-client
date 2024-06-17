import React from 'react';

const Create = () => {
    return (
      <div>
        <span className="container1">
        <h1 className="page-title">Create Blog Post</h1>
        <span className="banner">
            <input type="file" accept="image/*" id="banner-upload" hidden/>
            <label for="banner-upload" className="banner-upload-btn"><i className="fa fa-upload" aria-hidden="true"></i></label>
        </span>
        <br/>
        <span className="blog">
            <textarea type="text" className="title" placeholder="Blog title..."></textarea>
            <textarea type="text" className="article" placeholder="Start writing here..."></textarea>
        </span>

        <span className="blog-options">
            <button className=" publish-btn">Publish</button>
        </span>
    </span>
      </div>
    )
  }

export default Create;