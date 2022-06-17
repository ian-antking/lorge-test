import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo = styled(Link)`
  font-size: 2em;
  color: ${(props) => props.theme.background};
  font-weight: bold;
  text-decoration: none;
`

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.text};
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const Header: React.FC = (): React.ReactElement => (
  <HeaderContainer>
    <Logo to="/">lörge</Logo>
  </HeaderContainer>
)

export default Header
