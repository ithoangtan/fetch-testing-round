import React from 'react'
import styled from 'styled-components'
import BtnBack from './Button/BtnBack'
import Paragraph from './Typography/Paragraph'
import Title from './Typography/Title'

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  
  .header_title {
    margin-bottom: 16px;
    margin-top: 8px;
  }
`

type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string
  description: string
}

const Header: React.FC<HeaderProps> = ({ title, description, ...rest }) => {
  return (
    <HeaderStyled {...rest}>
      <BtnBack />
      <Title variant='h3' className='header_title'>
        {title}
      </Title>
      <Paragraph type='secondary'>{description}</Paragraph>
    </HeaderStyled>
  )
}

export default Header
