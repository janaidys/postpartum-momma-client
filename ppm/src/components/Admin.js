import React from 'react';

const Admin = () => {
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
<tr>
<td>Bedtime Routine</td>
<td><button className="edit-button" type="submit">EDIT</button></td>
<td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
<tr>
<td>Fed is Best</td>
<td><button className="edit-button" type="submit">EDIT</button></td>
<td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
<tr>
<td>Our Favorite Playkits</td>
<td><button className="edit-button" type="submit">EDIT</button></td>
<td><button className="delete-button" type="submit">DELETE</button></td>
</tr>
<tr>
<td>Healing your Core Postpartum</td>
<td><button className="edit-button" type="submit">EDIT</button></td>
<td><button className="delete-button" type="submit">DELETE</button></td>
</tr>

</tbody>
</table>
</span> 
</span>
      </div>
    )
  }

export default Admin;