import SVGBack from 'assets/svg/SVGBack'
import React from 'react'
import styled from 'styled-components'

const BtnBackStyled = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 50%;
  border: none;
`

type BtnBackProps = React.HTMLAttributes<HTMLButtonElement> & {
  path?: string
}

const BtnBack: React.FC<BtnBackProps> = ({ children, path, ...rest }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    rest.onClick && rest.onClick(e)

    if (path) {
      window.location.href = path
      // if implement react router, use history.push(path)
    } else {
      window.history.back()
    }
  }

  return (
    <BtnBackStyled {...rest} onClick={handleClick}>
      {children ? children : <SVGBack />}
    </BtnBackStyled>
  )
}

export default BtnBack
