'use client'

import Image from 'next/image'
import { FC, useState } from 'react'

interface ProductContainerProps {
  images: {
    src: string
    alt: string
  }[]
}
const ProductContainer: FC<ProductContainerProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage(prev => {
      return prev === 0 ? images.length - 1 : prev - 1
    })
  }

  return (
    <div className="w-full sm:w-[400px] sm:h-[450px] aspect-[5/4] flex flex-col items-center gap-6 border-2 border-teal-800">
      <div className="relative w-full aspect-[5/4] grid place-items-center sm:rounded-xl sm:overflow-clip">
        <Image
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          fill
          id="product-image"
          className="object-cover"
          quality={100}
        />

        <div className="text-xs sm:hidden">
          <button
            className="absolute p-5 bg-white rounded-full left-4 text-black"
            onClick={previousImage}
            aria-controls='product-image'
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-2/3 -translate-y-1/2">
              <Image src="/images/icon-previous.svg" alt="prev" width={10} height={10} />
            </div>
          </button>
          <button
            className="absolute p-5 flex bg-white rounded-full right-4 text-black"
            onClick={nextImage}
            aria-controls='product-image'
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/3 -translate-y-1/2">
              <Image src="/images/icon-next.svg" alt="next" width={10} height={10} />
            </div>
          </button>
        </div>
      </div>
      <div className="hidden sm:flex w-full h-full border-2 border-teal-700">
        <div>
          Image Carousel Here
        </div>
      </div>
    </div>
  )
}

export default ProductContainer