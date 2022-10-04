import React from 'react'
import styled, { css } from 'styled-components'
import { Color } from 'styles/color'

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
  children: any
  type?: 'primary' | 'secondary' | 'tertiary'
  align?: 'left' | 'center' | 'right'
}

const secondaryStyle = css`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.005em;
  color: ${Color.grey04};
`

const tertiaryStyle = css`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: ${Color.grey05};
`

const ParagraphStyled = styled.p<ParagraphProps>`
  margin: 0;
  ${({ type }) => type === 'secondary' && secondaryStyle}
  ${({ type }) => type === 'tertiary' && tertiaryStyle}
  ${({ align }) => align === 'center' && `text-align: ${align}`}
`

const Paragraph: React.FC<ParagraphProps> = ({ children, type, ...rest }) => {
  return (
    <ParagraphStyled {...rest} type={type}>
      {children}
    </ParagraphStyled>
  )
}

export default Paragraph
