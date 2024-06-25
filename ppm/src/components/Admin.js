import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Admin.css';

const Admin = (props) => {
  const navigate = useNavigate();
  const toCreate = () => {
    navigate(`/create`)
  }
  const  toEdit = (post) => {
    navigate('/update', {state:post, replace:true})
  }
  const [posts, setPosts] = useState([]);
  useEffect(() => { 
    fetch(`https://postpartum-momma.onrender.com/api/blog`) 
      .then((response) => response.json())
      .then((result) => {
        if (result.statusCode === 200) {
          setPosts(result.data)
        }
      })
      .catch((error)=> console.log(error));
  }, []);
  useEffect(()=> {
    console.log(posts)
  }, [posts]);

  function DeletePost(postID) {
    fetch(`https://codesquad-comics-rzef.onrender.com/api/blog/delete/${postID}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error)=> console.log(error))

}

    return (
      <div>
        <div className="container1">
    
    <div className="table-title">
    <h1 className="admin-header">ADMIN PAGE</h1>
    <button onClick={() => {toCreate()}}className="edit-button" type="submit">ADD A NEW BLOG POST</button>
</div>
    
<div>
<table className="blog-post-table">
<thead>  
    <tr>
        <th>BLOG POST TITLE</th>
        <th>EDIT</th>
        <th>DELETE</th>
    </tr>
</thead>

<tbody>
  {posts.map((post) => ( 
<tr key={post.post_id}>
<td>{post.title}</td>
<td>
  <button className="edit-button" type="submit" onClick={() => {toEdit()}}>EDIT</button></td>
<td><button className="delete-button" type="submit"onClick={DeletePost}>DELETE</button></td>
</tr>
  ))}


</tbody>
</table>
</div> 
</div>
      </div>
    )
  }

export default Admin;