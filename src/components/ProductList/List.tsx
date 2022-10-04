import React from 'react'
import styled from 'styled-components'
import Slider, { Settings } from 'react-slick'
import Title from 'components/Typography/Title'
import { Color } from 'styles/color'
import Product, { ProductProps } from './Product'
import ProductSkeleton from './ProductSkeleton'

const ProductListStyled = styled.div`
  display: flex;
  flex-direction: column;

  .slider_list {
    margin-top: 16px;
    .slider_item {
      padding: 8px 24px 32px 0;
    }
  }
`

type ProductListProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string
  productList: ProductProps[]
  settingSlider?: Settings
  isLoading?: boolean
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  productList,
  settingSlider,
  isLoading,
  ...rest
}) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    touchThreshold: 20,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 624,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
    ...settingSlider,
  }

  return (
    <ProductListStyled {...rest}>
      <Title variant='title1' color={Color.grey01}>
        {title}
      </Title>
      <Slider {...settings} className='slider_list'>
        {productList.map((p) => {
          return (
            <div className='slider_item' key={p.id}>
              <Product {...p} />
            </div>
          )
        })}
        {isLoading &&
          productList.length === 0 &&
          [...new Array(4)].map((p) => {
            return (
              <div className='slider_item' key={p.id}>
                <ProductSkeleton />
              </div>
            )
          })}
      </Slider>
    </ProductListStyled>
  )
}

export default ProductList
