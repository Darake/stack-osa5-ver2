import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Blog from './Blog'

describe('<Blog />', () => {
  let component
  let mockLike
  let mockRemove

  beforeEach(() => {
    const blog = {
      title: 'My blog',
      author: 'me',
      likes: 9001,
      url: 'www.blogurl.com',
      user: {
        username: 'admin',
        name: 'administrator'
      }
    }
    mockLike = jest.fn()
    mockRemove = jest.fn()

    component = render(
      <Blog blog={blog} likeBlog={mockLike} removeBlog={mockRemove} user={blog.user} />
    )
  })

  it('only shows name and author by default', () => {
    const div = component.container.querySelector('.togglableContent')

    expect(component.container).toHaveTextContent('My blog by me')
    expect(div).toHaveStyle('display: none')
  })

  it('shows detailed info when clicked on', () => {
    const div = component.container.querySelector('.basicInformation')
    fireEvent.click(div)

    expect(component.container).toHaveTextContent('My blog by me')
    expect(div).toHaveStyle('display:')
  })
})