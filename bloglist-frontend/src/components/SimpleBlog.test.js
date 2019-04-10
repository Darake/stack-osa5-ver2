import React from 'react'
import { render } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

describe('<Simpleblog />', () => {
  let component

  beforeEach(() => {
    const blog = {
      title: 'Best blog',
      author: 'me',
      likes: 9001
    }

    component = render(
      <SimpleBlog blog={blog} />
    )
  })

  it('renders its content', () => {
    expect(component.container).toHaveTextContent('Best blog')
    expect(component.container).toHaveTextContent('me')
    expect(component.container).toHaveTextContent('blog has 9001 likes')
  })
})