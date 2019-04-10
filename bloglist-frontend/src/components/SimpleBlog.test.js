import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

describe('<Simpleblog />', () => {
  let component
  let mockHandler

  beforeEach(() => {
    const blog = {
      title: 'Best blog',
      author: 'me',
      likes: 9001
    }

    mockHandler = jest.fn()

    component = render(
      <SimpleBlog blog={blog} onClick={mockHandler} />
    )
  })

  it('renders its content', () => {
    expect(component.container).toHaveTextContent('Best blog')
    expect(component.container).toHaveTextContent('me')
    expect(component.container).toHaveTextContent('blog has 9001 likes')
  })

  it('calls event handler twice when like button is clicked twice', () => {
    const button = component.getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
  })
})