import SVGBack from 'assets/svg/SVGBack'
import React from 'react'
import styled from 'styled-components'

const BtnLinkStyled = styled.p`
  width: max-content;
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0062ff;
  letter-spacing: -0.005em;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

type BtnLinkProps = React.HTMLAttributes<HTMLParagraphElement> & {
  link?: string
  suffix?: React.ReactNode
}

const BtnLink: React.FC<BtnLinkProps> = ({
  children,
  link,
  suffix,
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    rest.onClick && rest.onClick(e)

    if (link) {
      window.location.href = link
      // if implement react router, use history.push(path)
    }
  }

  return (
    <BtnLinkStyled {...rest} onClick={handleClick}>
      {children} {suffix}
    </BtnLinkStyled>
  )
}

export default BtnLink
