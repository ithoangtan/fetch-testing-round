import SVGInsufficient from 'assets/svg/SVGInsufficient'
import BtnLink from 'components/Button/BtnLink'
import Paragraph from 'components/Typography/Paragraph'
import Title from 'components/Typography/Title'
import React from 'react'
import styled from 'styled-components'
import { Color } from 'styles/color'

export type ProductProps = React.HTMLAttributes<HTMLDivElement> & {
  image: React.ReactNode
  productPrice: number
  description: string
  insufficient?: boolean
}

export const ProductStyled = styled.div<any>`
  display: inline-flex !important;
  flex-direction: column;
  width: 200px;
  height: 240px;

  background: #fff;

  border: 1px solid ${Color.grey08};

  box-shadow: 0px 12px 18px rgba(23, 23, 37, 0.04);
  border-radius: 4px;

  .product_image {
    height: 98px;
  }
  .product_content {
    padding: 16px 16px 0 16px;
    .product_price {
      display: flex;
      align-items: center;
      gap: 4px;
      .product_price_icon {
        width: 18px;
        height: 18px;
        object-fit: contain;
      }
    }
    .product_description {
      margin-top: 8px;
      margin-bottom: 4px;
      display: -webkit-box;
      max-height: ${(props) => (props.insufficient ? '48px' : '65px')};
      -webkit-line-clamp: ${(props) => (props.insufficient ? '2' : '3')};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`

const Product: React.FC<ProductProps> = ({
  productPrice,
  description,
  image,
  insufficient,
  ...rest
}) => {
  return (
    <ProductStyled {...rest} insufficient={insufficient}>
      <div className='product_image'>{image}</div>
      <div className='product_content'>
        <Title
          variant='title2'
          color={insufficient ? Color.grey04 : Color.blueDark}
          className='product_price'
        >
          {insufficient && (
            <span className='product_price_icon'>
              <SVGInsufficient />
            </span>
          )}
          {productPrice.toLocaleString(
            undefined, // leave undefined to use the visitor's browser
            // locale or a string like 'en-US' to override it.
            { minimumFractionDigits: 0 }
          )}
          <Paragraph>Coins</Paragraph>
        </Title>
        <Paragraph className='product_description' type='secondary'>
          {description}
        </Paragraph>
        {insufficient && <BtnLink>Insufficient coins</BtnLink>}
      </div>
    </ProductStyled>
  )
}

export default Product
