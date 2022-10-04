import Paragraph from 'components/Typography/Paragraph'
import Title from 'components/Typography/Title'
import React from 'react'
import styled from 'styled-components'
import { Color } from 'styles/color'
import { ProductStyled } from './Product'

export type ProductSkeletonProps = React.HTMLAttributes<HTMLDivElement> & {}

const ProductSkeletonStyled = styled(ProductStyled)``

const ProductSkeleton: React.FC<ProductSkeletonProps> = ({ ...rest }) => {
  return (
    <ProductSkeletonStyled {...rest}>
      <div className='product_image'>123</div>
      <div className='product_content'>
        <div>123123</div>
        <div>description</div>
      </div>
    </ProductSkeletonStyled>
  )
}

export default ProductSkeleton
