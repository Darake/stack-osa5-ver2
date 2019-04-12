import React from 'react'
import { useField } from '../hooks'
import blogService from '../services/blogs'

const NewBlog = ({ blogs, setBlogs, notify, blogRef }) => {
  const [title, resetTitle] = useField('text')
  const [author, resetAuthor] = useField('text')
  const [url, resetUrl] = useField('text')

  const handleCreate = async (event) => {
    event.preventDefault()
    blogRef.current.toggleVisibility()
    const blogObject = {
      title: title.value,
      author: author.value,
      url: url.value
    }
    const returnedBlog = await blogService.create(blogObject)
    setBlogs(blogs.concat(returnedBlog))

    notify(`A new blog ${title.value} by ${author.value} added`)

    resetTitle()
    resetAuthor()
    resetUrl()

  }

  return (
    <div>
      <h2>Create a new blog</h2>
      <form onSubmit={handleCreate}>
        <div>
          Title:
          <input {...title} />
        </div>
        <div>
          Author:
          <input {...author} />
        </div>
        <div>
          URL:
          <input {...url} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default NewBlog