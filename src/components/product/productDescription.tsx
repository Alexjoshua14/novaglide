import { FC } from 'react'

interface ProductDescriptionProps {
  name: string
  description: string
  brand: string
}

const ProductDescription: FC<ProductDescriptionProps> = ({ name, description, brand }) => {
  return (
    <div className="flex flex-col gap-2 lg:gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-orange/80 text-xs font-semibold tracking-widest">
          {brand.toUpperCase()}
        </h2>
        <h1 className="text-2xl lg:text-4xl tracking-wide font-bold">
          {name}
        </h1>
      </div>
      <p className="text-greyblue-800 font-light tracking-wide leading-relaxed ">
        {description}
      </p>
    </div>
  )
}

export default ProductDescription