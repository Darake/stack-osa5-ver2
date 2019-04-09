import React, { useState } from 'react'

const Blog = ({ blog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [expanded, setExpanded] = useState(false)

  const showWhenExpanded = { display: expanded ? '' : 'none' }

  return (
    <div style={blogStyle}>
      <div onClick={() => setExpanded(!expanded)}>
        {blog.title} by {blog.author}
      </div>
      <div style={showWhenExpanded}>
        {blog.url} <br/>
        {blog.likes} likes <button>like</button> <br/>
        added by {blog.user.name}
      </div>
    </div>
)}

export default Blog