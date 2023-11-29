import { FC } from 'react'
import ProductDescription from './productDescription'
import ProductPrice from './productPrice'
import AddToCart from '../cart/addToCart'

interface ProductInfoProps {
  name: string
  brand: string
  description: string
  price: number
  discount?: number
}

const ProductInfo: FC<ProductInfoProps> = ({ name, brand, description, price, discount }) => {
  return (
    <div className="flex flex-col gap-4">
      <ProductDescription name={name} description={description} brand={brand} />
      <ProductPrice price={price} discount={discount} />
      <AddToCart />
    </div>
  )
}

export default ProductInfo