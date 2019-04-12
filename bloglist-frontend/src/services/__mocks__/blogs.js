const blogs = [
  {
    title: 'Redux is nice',
    author: 'Red Ux',
    url: 'redux.com',
    user: {
      username: 'daraku',
      name: 'Gert Adamson',
      id: '5c71c28df99af17b0c22b18e'
    },
    likes: 8,
    id: '5c855cccd754ba3e4bb49cc5'
  },
  {
    title: 'A to C of Blogs',
    author: 'Adamson',
    url: 'adamson.com',
    user: {
      username: 'daraku',
      name: 'Gert Adamson',
      id: '5c71c28df99af17b0c22b18e'
    },
    likes: 0,
    id: '5cac7e42a7052f2b20553355'
  },
  {
    title: 'Reffing with Andy',
    author: 'Andy',
    url: 'andy.com',
    user: {
      username: 'daraku',
      name: 'Gert Adamson',
      id: '5c71c28df99af17b0c22b18e'
    },
    likes: 0,
    id: '5cacbaa2a7052f2b20553358'
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}

const setToken = () => {
}

export default { getAll, setToken }