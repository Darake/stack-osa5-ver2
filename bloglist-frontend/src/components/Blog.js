import React, { useState } from 'react'

const Blog = ({ blog, likeBlog, removeBlog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [expanded, setExpanded] = useState(false)

  const showWhenExpanded = { display: expanded ? '' : 'none' }

  const handleLike = () => {
    const updatedBlog = {
      user: blog.user.id,
      likes: blog.likes + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url
    }
    likeBlog(blog.id, updatedBlog)
  }

  return (
    <div style={blogStyle}>
      <div onClick={() => setExpanded(!expanded)}>
        {blog.title} by {blog.author}
      </div>
      <div style={showWhenExpanded}>
        {blog.url} <br/>
        {blog.likes} likes 
        <button onClick={handleLike}>like</button> <br/>
        added by {blog.user.name} <br/>
        <button onClick={() => removeBlog(blog)}>Remove</button>
      </div>
    </div>
)}

export default Blog