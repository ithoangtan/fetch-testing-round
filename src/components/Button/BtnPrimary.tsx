import React from 'react'
import styled from 'styled-components'
import { Color } from 'styles/color'

const BtnPrimaryStyled = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Color.grey01};
  border-radius: 4px;
  border: none;
`

type BtnPrimaryProps = React.HTMLAttributes<HTMLButtonElement> & {}

const BtnPrimary: React.FC<BtnPrimaryProps> = ({ children, ...rest }) => {
  return <BtnPrimaryStyled {...rest}>{children}</BtnPrimaryStyled>
}

export default BtnPrimary
