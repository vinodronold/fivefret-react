import React from 'react'
import renderer from 'react-test-renderer'
import Logo from '../Logo'

describe('components/Logo', () => {
  it('should match Snapshot', () => {
    let _Logo = renderer.create(<Logo />)
    expect(_Logo).toMatchSnapshot()
  })
})
