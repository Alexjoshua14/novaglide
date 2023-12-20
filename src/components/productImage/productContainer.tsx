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
    <div
      className="w-full sm:w-[400px] flex flex-col items-center gap-6">
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
      <div className="hidden sm:flex sm:min-h-[100px] w-full h-full overflow-x-auto no-scrollbar">
        <div className="flex w-full gap-6">
          {images.map((image, index) => (
            <button
              key={index}
              className={`relative h-full aspect-square grid place-items-center rounded-lg overflow-clip border-2 ${index === currentImage ? 'border-orange' : 'border-transparent'}`}
              onClick={() => setCurrentImage(index)}
            >
              <div className={`z-30 absolute w-full h-full bg-white transition-opacity ${index === currentImage ? 'bg-opacity-70' : 'bg-opacity-0'}`} />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </button>

          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductContainer