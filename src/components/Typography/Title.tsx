import React from 'react'
import styled, { css } from 'styled-components'
import { Color } from 'styles/color'

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: any
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'title1'
    | 'title2'
    | 'title3'
  color?: string
}

const h1Style = css`
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.5px;
  color: ${Color.grey01};
`

const h3Style = css`
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
`

const title1Style = css`
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`

const title2Style = css`
  font-size: 16px;
  line-height: 24px;
  color: ${Color.blueDark};
`

const title3Style = css`
  font-size: 14px;
  line-height: 24px;
  color: ${Color.grey05};
`

const TitleStyled = styled.h1<TitleProps>`
  font-style: normal;
  font-weight: 600;
  margin: 0;
  ${({ variant }) => variant === 'h1' && h1Style}
  ${({ variant }) => variant === 'h3' && h3Style}
  ${({ variant }) => variant === 'title1' && title1Style}
  ${({ variant }) => variant === 'title2' && title2Style}
  ${({ variant }) => variant === 'title3' && title3Style}
`

const Title: React.FC<TitleProps> = ({
  children,
  variant = 'h1',
  color,
  className,
  ...rest
}) => {
  return (
    <TitleStyled
      className={`title ${className}`}
      style={{ color }}
      as={variant.startsWith('h') && variant.length === 2 ? variant : 'h1'}
      variant={variant}
      {...rest}
    >
      {children}
    </TitleStyled>
  )
}

export default Title
