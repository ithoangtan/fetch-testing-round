import SVGLink from 'assets/svg/SVGLink'
import BtnLink from 'components/Button/BtnLink'
import BtnPrimary from 'components/Button/BtnPrimary'
import ProcessLine from 'components/ProcessLine'
import Paragraph from 'components/Typography/Paragraph'
import Title from 'components/Typography/Title'
import React from 'react'
import styled from 'styled-components'
import { Color } from 'styles/color'
import CountUp from 'react-countup'
type HeaderCardProps = React.HTMLAttributes<HTMLDivElement> & {}

const HeaderCardStyled = styled.div`
  padding: 24px;

  display: flex;
  flex-direction: column;

  border: 1px solid ${Color.grey09};
  border-radius: 8px;

  background: url('/svg/header_card_bg.svg');
  background-repeat: no-repeat;
  background-size: cover;

  box-shadow: 0px 12px 18px rgba(23, 23, 37, 0.04);

  .card_number {
    margin: 8px 0 32px 0;
  }
  .card_description {
    margin: 32px 0 16px 0;
  }
  .card_button {
    margin: 24px 0 16px 0;
  }
`

const HeaderCard: React.FC<HeaderCardProps> = ({ ...rest }) => {
  return (
    <HeaderCardStyled {...rest}>
      <Title variant='title3'>Available Coin balance</Title>
      <Title variant='h1' className='card_number'>
        <CountUp end={340} duration={1.5} />
      </Title>
      <ProcessLine current={1200 / (1200 + 800) * 100} />
      <Paragraph type='secondary' className='card_description'>
        You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
      </Paragraph>
      <BtnLink suffix={<SVGLink />}>View tier benefits</BtnLink>
      <BtnPrimary className='card_button'>
        <Title variant='title1'>My coupons</Title>
      </BtnPrimary>
      <Paragraph type='tertiary' align='center'>
        Updated : 02/11/2021
      </Paragraph>
    </HeaderCardStyled>
  )
}

export default HeaderCard
