import React from 'react'
import styled from 'styled-components'
import Header from 'components/Header'
import { Color } from 'styles/color'
import HeaderCard from './components/HeaderCard'
import ProductList from 'components/ProductList/List'
import { foodList, petrolList, rentalList } from './mockData'

const HomeStyled = styled.section`
  display: flex;
  flex-direction: column;

  .header_container {
    padding: 32px 24px; // 32px cause for iPhone >= 11
    background: ${Color.grey01};
    position: relative;
    margin-bottom: 268px;

    .header {
      margin-bottom: 178px;
    }

    .header_card {
      width: calc(100% - 80px);
      position: absolute;
      top: 240px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  .content_container {
    padding-left: 24px;
    margin-bottom: 64px;
  }
`

export default function Home() {
  return (
    <HomeStyled>
      <div className='header_container'>
        <Header
          title='Silver Tier'
          description='In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.'
          className='header'
        />
        <HeaderCard className='header_card' />
      </div>
      <div className='content_container'>
        <ProductList title='Petrol' productList={petrolList} />
        <ProductList title='Rental Rebate' productList={rentalList} />
        <ProductList title='Food and Beverage' productList={foodList} />
      </div>
    </HomeStyled>
  )
}
