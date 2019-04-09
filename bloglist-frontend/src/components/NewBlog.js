import React, { useState } from 'react'
import blogService from '../services/blogs'

const NewBlog = ({ blogs, setBlogs, notify }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleCreate = async (event) => {
    event.preventDefault()
    const blogObject = {
      title, author, url
    }
    const returnedBlog = await blogService.create(blogObject)
    setBlogs(blogs.concat(returnedBlog))

    notify(`A new blog ${title} by ${author} added`)

    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div>
      <h2>Create a new blog</h2>
      <form onSubmit={handleCreate}>
        <div>
          Title:
          <input
          type="text"
          value={title}
          name="Title"
          onChange={({ target }) => setTitle(target.value)}
        />
        </div>
        <div>
          Author:
          <input
          type="text"
          value={author}
          name="Aurhot"
          onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          URL:
          <input
          type="text"
          value={url}
          name="URL"
          onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default NewBlog