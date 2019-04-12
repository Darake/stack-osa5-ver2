import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, likeBlog, removeBlog, user }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [expanded, setExpanded] = useState(false)

  const showWhenExpanded = { display: expanded ? '' : 'none' }
  const showIfCreator = { display: blog.user.username === user.username ? '' : 'none' }

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
    <div style={blogStyle} className="blog">
      <div onClick={() => setExpanded(!expanded)} className="basicInformation">
        {blog.title} by {blog.author}
      </div>
      <div style={showWhenExpanded} className="togglableContent">
        {blog.url} <br/>
        {blog.likes} likes
        <button onClick={handleLike}>like</button> <br/>
        added by {blog.user.name} <br/>
        <button style={showIfCreator} onClick={() => removeBlog(blog)}>Remove</button>
      </div>
    </div>
  )}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  likeBlog: PropTypes.func.isRequired,
  removeBlog: PropTypes.func.isRequired
}

export default Blog