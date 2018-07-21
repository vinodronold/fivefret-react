import React from 'react'
import styled from 'styled-components'

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`
const Item = styled.a`
  margin: 1rem;
  text-align: center;
`

export default () => (
  <Menu>
    <Item>Home</Item>
    <Item>Browse</Item>
    <Item>Login</Item>
  </Menu>
)
