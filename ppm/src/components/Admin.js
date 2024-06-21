import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
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
        <span className="container1">
    
    <span className="table-title">
    <h1 className="admin-header">ADMIN PAGE</h1>
    <button className="edit-button" type="submit">ADD A NEW BLOG POST</button>
</span>
    
<span>
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
  <button className="edit-button" type="submit">EDIT</button></td>
<td><button className="delete-button" type="submit"onClick={DeletePost}>DELETE</button></td>
</tr>
  ))}


</tbody>
</table>
</span> 
</span>
      </div>
    )
  }

export default Admin;