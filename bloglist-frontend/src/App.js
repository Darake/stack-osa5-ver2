import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import NewBlog from './components/NewBlog'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs.sort((a, b) => b.likes - a.likes) )
    )  
  }, [])

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({ username, password })
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      setUser(user)
      blogService.setToken(user.token)
    } catch (exception) {
      notify('Wrong username or password', 'error')
    }
    
    setUsername('')
    setPassword('')   
  }

  const handleLogout = () => {
    window.localStorage.clear()
    blogService.setToken(null)
    setUser(null)
  }

  const notify = (message, type = null) => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  const newBlogRef = React.createRef()

  const likeBlog = async (id, blogObject) => {
    const updatedBlog = await blogService.update(id, blogObject)
    setBlogs(blogs
      .map(blog => blog.id === id ? updatedBlog : blog)
      .sort((a, b) => b.likes - a.likes))
  }

  const removeBlog = async blog => {
    if (window.confirm(`Remove blog ${blog.name} by ${blog.author}`)) {
      await blogService.remove(blog.id)
      setBlogs(blogs.filter(b => b.id !== blog.id))
    }
  }

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <Notification notification={notification} />
        <form onSubmit={handleLogin}>
          <div>
            Käyttäjätunnus: 
            <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            Salasana: 
            <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">Kirjaudu</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification notification={notification} />
      <p>{user.name} logged in</p>
      <button onClick={() => handleLogout()}>Log out</button>
      <Togglable buttonLabel="New blog" ref={newBlogRef}>
        <NewBlog blogs={blogs} setBlogs={setBlogs} notify={notify} blogRef={newBlogRef}/>
      </Togglable>
      {blogs.map(blog =>
        <Blog
        key={blog.id}
        blog={blog}
        likeBlog={likeBlog}
        removeBlog={removeBlog}
        user={user}
        />
      )}
    </div>
  )
}

export default App