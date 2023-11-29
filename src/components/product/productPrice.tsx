import { FC } from 'react'

interface ProductPriceProps {
  price: number
  discount?: number
}

const SalePercentage = ({ discount }: { discount: number }) => {
  return (
    <div className="h-fit px-[6px] py-[2px] rounded grid place-items-center bg-orange-pale text-orange">
      <p className="font-bold">
        {`${discount * 100}\%`}
      </p>
    </div>
  )

}

const ProductPrice: FC<ProductPriceProps> = ({ price, discount }) => {
  if (!discount) {
    return (
      <div className="w-full flex items-center">
        <p className="text-3xl font-semibold">
          {`\$${price.toFixed(2)}`}
        </p>
      </div>
    )
  }

  const discountedPrice = (price - (price * discount)).toFixed(2)

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-4">
        <p className="text-3xl font-semibold">
          {`\$${discountedPrice}`}
        </p>
        <SalePercentage discount={discount} />
      </div>
      <div>
        <p className="text-greyblue-500 line-through font-bold">
          {`\$${price.toFixed(2)}`}
        </p>
      </div>
    </div>
  )
}

export default ProductPrice